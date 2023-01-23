import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { CloudinaryService } from 'src/app/services/cloudinary/cloudinary.service';
@Component({
  selector: 'app-form-new-product',
  templateUrl: './form-new-product.component.html',
  styleUrls: ['./form-new-product.component.scss']
})
export class FormNewProductComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private cloudinary:CloudinaryService) { 

    this.dataForm = this.formBuilder.group({
      title:['', Validators.required],
      subtitle:['', Validators.required],
      price:['', Validators.required],
      priceOffer:['', Validators.required],
      description:['', Validators.required],
      imageThumbnail:['', Validators.required],
      imagesGalery:['', Validators.required],
    })
  }

  ngOnInit() {

  }

  dataForm:FormGroup
  imageThumbnailFile:any
  imageThumbnailString?:string

  imagesGaleryFile:any[] = []
  imagesGaleryString:string[] = []

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
      this.dataForm.value.imageThumbnail = this.imageThumbnailString;
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
    this.imagesGaleryFile.forEach(e => {

      dataGalery.append('file', e);
      dataGalery.append('upload_preset', 'angular_cloudinary');
      dataGalery.append('cloud_name', 'diyorb8ka');

      this.http.post(
        'https://api.cloudinary.com/v1_1/diyorb8ka/upload',
        dataGalery
      ).subscribe((res: any) => {
        const url = res.url;
        this.imagesGaleryString.push(url);
      });

    })
    
    
    setTimeout(() => {
      console.log(this.dataForm.value.imageThumbnail);
      
    },10000 );
      
 
    
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
