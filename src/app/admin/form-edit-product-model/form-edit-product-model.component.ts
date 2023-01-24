import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { hostUrl } from 'src/app/app.component';
import { CloudinaryService } from 'src/app/services/cloudinary/cloudinary.service';

@Component({
  selector: 'app-form-edit-product-model',
  templateUrl: './form-edit-product-model.component.html',
  styleUrls: ['./form-edit-product-model.component.scss']
})
export class FormEditProductModelComponent implements OnInit {
  @Input() id:any

  ngOnInit(){
    console.log(this.id);
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
    

    console.log(this.id);
    
    if (this.imagesGaleryFile.length === 0){
      console.log(this.dataForm);
      return
    } 

    console.log(this.dataForm);
    

    this.disableButton = true
    const configToast:MatSnackBarConfig = {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration:3000,
      panelClass:['toast']
    }

    //thumbnail
    const dataThumbnail = new FormData()
    dataThumbnail.append('file', this.imageThumbnailFile)
    dataThumbnail.append('upload_preset', 'angular_cloudinary')
    dataThumbnail.append('cloud_name', 'diyorb8ka')


    this.cloudinary.upload(dataThumbnail).subscribe((res:any) =>{
      console.log(res);
      this.imageThumbnailString = res.url;

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
  
            const dataUnity = { id:this.id, form:this.dataForm.value, imagesGalery:JSON.stringify(this.imagesGaleryString), imageThumbnail:this.imageThumbnailString}
            console.log(dataUnity);
  
            
            this.http.put(hostUrl + '/admin/update-product-model', dataUnity).subscribe((res:any) => {
              console.log(res);
              this.toast.open('Producto Editado Correctamente', undefined, configToast)
            })
            
            this.disableButton = false
            this.imagesGaleryFile.length = 0
            this.imagesGaleryString = []
            this.dataForm.reset()
            this.dataForm.clearValidators()
            Object.keys(this.dataForm.controls).forEach((key:any) =>{
              this.dataForm.controls[key].setErrors(null) 
            })
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
