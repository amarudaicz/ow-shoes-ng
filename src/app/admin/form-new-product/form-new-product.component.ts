import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { CloudinaryService } from 'src/app/services/cloudinary/cloudinary.service';
import { hostUrl } from 'src/app/app.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Component({
  selector: 'app-form-new-product',
  templateUrl: './form-new-product.component.html',
  styleUrls: ['./form-new-product.component.scss']
})
export class FormNewProductComponent implements OnInit {
  ngOnInit() {

  }

  constructor(
    private formBuilder:FormBuilder, 
    private http:HttpClient, 
    private cloudinary:CloudinaryService,
    private toast:MatSnackBar){ 

    this.dataForm = this.formBuilder.group({
      title:[null, Validators.required],
      subtitle:[null, Validators.required],
      price:[null, Validators.required],
      priceOffer:[null, Validators.required],
      description:[null, Validators.required],
      imageThumbnail:[null, Validators.required],
      imagesGalery:[null, Validators.required],
    })
  }


  dataForm:FormGroup
  imageThumbnailFile:any
  imageThumbnailString?:string

  imagesGaleryFile:any[] = []
  imagesGaleryString?:any[] = []

  disableButton:boolean = false
  base64Thumbnail:any

  async sendForm(){
    
    if (this.imagesGaleryFile.length === 0){
      console.log(this.dataForm);
      return
    } 

    this.disableButton = true

    const configToast:MatSnackBarConfig = {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration:3000,
      panelClass:['toast'],
    }

    //thumbnail
    const dataThumbnail = new FormData()
    dataThumbnail.append('file', this.imageThumbnailFile)
    dataThumbnail.append('upload_preset', 'angular_cloudinary')
    dataThumbnail.append('cloud_name', 'diyorb8ka')


    this.cloudinary.upload(dataThumbnail).subscribe((res:any) =>{
      this.imageThumbnailString = res.url;
      this.dataForm.reset()

      //GALERYYYYYYYYY
      const dataGalery = new FormData()
      this.imagesGaleryFile.forEach((e:any, index:number) => {

        dataGalery.append('file', e);
        dataGalery.append('upload_preset', 'angular_cloudinary');
        dataGalery.append('cloud_name', 'diyorb8ka');

        this.cloudinary.upload(dataGalery).subscribe((res:any)=>{
          const url = res.url;
          this.imagesGaleryString?.push(url);  
          const lastPeticion = this.imagesGaleryFile.length

          if (index === lastPeticion - 1) {
            console.log('ULTIMA PETII XD', index);
  
            const dataUnity = { form:this.dataForm.value, imagesGalery:JSON.stringify(this.imagesGaleryString), imageThumbnail:this.imageThumbnailString}
            console.log(dataUnity);
  
            
            this.http.post(hostUrl + '/admin/insert-product', dataUnity).subscribe((res:any) => {
              console.log(res);
              this.toast.open(res.message , undefined, configToast)
              this.disableButton = false
            })
            
            this.imagesGaleryFile.length = 0
            this.imagesGaleryString = []
            this.dataForm.controls['imagesGalery'].reset()
            this.dataForm.clearValidators()
            console.log(this.dataForm);
            
            
          }
        })
      })

    })

    
  }



  capturarThumbnail(event:any): void{
    const file = event.target.files[0]
    this.imageThumbnailFile = file
  }


  capturarGalery(event:any){
    const files = event.target.files
    for (let i = 0; i < files.length; i++) {
      this.imagesGaleryFile.push(files[i])
    }    

  }

}
