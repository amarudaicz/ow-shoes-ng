import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { CloudinaryService } from 'src/app/services/cloudinary/cloudinary.service';
import { last } from 'rxjs';
@Component({
  selector: 'app-form-new-product',
  templateUrl: './form-new-product.component.html',
  styleUrls: ['./form-new-product.component.scss']
})
export class FormNewProductComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private cloudinary:CloudinaryService) { 

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

  ngOnInit() {

  }

  dataForm:FormGroup
  imageThumbnailFile:any
  imageThumbnailString?:string

  imagesGaleryFile:any[] = []
  imagesGaleryString:any[] = []

  imgUrl?:any
   

  async sendForm(){

    //thumbnail
    const fileThumbnail = this.imageThumbnailFile
    const dataThumbnail = new FormData()
    dataThumbnail.append('file', fileThumbnail)
    dataThumbnail.append('upload_preset', 'angular_cloudinary')
    dataThumbnail.append('cloud_name', 'diyorb8ka')
    const urlThumbnail = this.cloudinary.upload(dataThumbnail).subscribe((res:any) =>{
      console.log(res.url);
      this.imageThumbnailString = res.url;
      this.dataForm.controls['imageThumbnail'] = res.url
    })  


    console.log(urlThumbnail);
    
    // this.http.post(
    //   'https://api.cloudinary.com/v1_1/diyorb8ka/upload', 
    //   dataThumbnail
    // ).subscribe((res:any)=>{
    //   this.imgUrl = res.url
    //   this.imageThumbnailString = res.url
    // })



    //GALERY
    const dataGalery = new FormData()
    this.imagesGaleryFile.forEach((e, index) => {

      dataGalery.append('file', e);
      dataGalery.append('upload_preset', 'angular_cloudinary');
      dataGalery.append('cloud_name', 'diyorb8ka');

      this.http.post(
        'https://api.cloudinary.com/v1_1/diyorb8ka/upload',
        dataGalery
      ).subscribe((res: any) => {
        const url = res.url;
        this.imagesGaleryString.push(url);

        const lastPeticion = this.imagesGaleryFile.length
        console.log(this.imagesGaleryFile);
        
        if (index === lastPeticion - 1) {
          console.log('ULTIMA PETII XD');
          // this.dataForm.controls['imagesGalery'] = this.imagesGaleryString
          
          const dataForm = { form:this.dataForm.value, imagesGalery:this.imagesGaleryString}
          console.log(dataForm);
          
        }

        
      });

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
