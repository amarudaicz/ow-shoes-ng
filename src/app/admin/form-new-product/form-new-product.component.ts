import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { CloudinaryService } from 'src/app/services/cloudinary/cloudinary.service';
import { hostUrl } from 'src/app/app.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-form-new-product',
  templateUrl: './form-new-product.component.html',
  styleUrls: ['./form-new-product.component.scss']
})
export class FormNewProductComponent implements OnInit {
  ngOnInit() {

  }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cloudinary: CloudinaryService,
    private toast: MatSnackBar,
    private sanitizer:DomSanitizer) {

    this.dataForm = this.formBuilder.group({
      title: [null, Validators.required],
      subtitle: [null, Validators.required],
      price: [null, Validators.required],
      priceOffer: [null, Validators.required],
      description: [null, Validators.required],
      imageThumbnail: [null, Validators.required],
      imagesGalery: [null, Validators.required],
    })
  }


  dataForm: FormGroup
  imageThumbnailFile: any
  imageThumbnailString?: string

  imagesGaleryFile: any[] = []
  imagesGaleryString?: string[] = []

  disableButton: boolean = false
  base64Thumbnail?: any
  base64Galery: any[] = []

  async sendForm() {

    if (this.imagesGaleryFile.length === 0) {
      console.log(this.dataForm);
      return
    }

    this.disableButton = true

    const configToast: MatSnackBarConfig = {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: ['toast'],
    }

    //thumbnail
    const dataThumbnail = new FormData()
    dataThumbnail.append('file', this.imageThumbnailFile)
    dataThumbnail.append('upload_preset', 'angular_cloudinary')
    dataThumbnail.append('cloud_name', 'diyorb8ka')


    this.cloudinary.upload(dataThumbnail).subscribe((res: any) => {
      this.imageThumbnailString = res.url;

      //GALERYYYYYYYYY
      const dataGalery = new FormData()
      this.imagesGaleryFile.forEach((e: any, index: number) => {

        dataGalery.append('file', e);
        dataGalery.append('upload_preset', 'angular_cloudinary');
        dataGalery.append('cloud_name', 'diyorb8ka');

        this.cloudinary.upload(dataGalery).subscribe((res: any) => {
          const url = res.url;
          this.imagesGaleryString?.push(url);

          const lastPeticion = this.imagesGaleryFile.length

          if (index === lastPeticion - 1) {
            console.log('ULTIMA PETII XD', index);

            const dataUnity = { form: this.dataForm.value, imagesGalery: JSON.stringify(this.imagesGaleryString), imageThumbnail: this.imageThumbnailString }
            console.log(dataUnity);


            this.http.post(hostUrl + '/admin/insert-product', dataUnity).subscribe((res: any) => {
              console.log(res);
              this.toast.open(res.message, undefined, configToast)
              this.disableButton = false
              this.dataForm.reset()
              
              setTimeout(() => {
                location.reload()
              }, 2000);
            })

            this.imagesGaleryFile.length = 0
            this.imagesGaleryString = []


          

          }
        })
      })
    })
  }

  capturarThumbnail(event: any): void {
    const file = event.target.files[0]
    this.imageThumbnailFile = file
    
    this.extraerBase64(file).then((image:any)=>{
      this.base64Thumbnail = image.base
    })
  }


  capturarGalery(event: any) {
    const files = event.target.files
    for (let i = 0; i < files.length; i++) {
      this.imagesGaleryFile.push(files[i])

      this.extraerBase64(files[i]).then((image:any)=>{
        this.base64Galery.push(image.base)
      })  
      
    }


    this.base64Galery = [ ]

  }




  extraerBase64 = async (data:any) => new Promise((resolve, reject) => {
    try {
      
      const unsafeImg = window.URL.createObjectURL(data)
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg)
      const reader = new FileReader()

      reader.readAsDataURL(data)
      return reader.onload = () =>{
        resolve({
          base:reader.result
        })
      }

      reader.onerror = error =>{
        reject({
          base:null 
        })
      }
    } catch (e) {
      return null
      
    }
  })



}
