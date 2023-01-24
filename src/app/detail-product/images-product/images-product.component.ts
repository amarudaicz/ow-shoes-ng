import { Component, Input,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { hostUrl } from 'src/app/app.component';

@Component({
  selector: 'app-images-product',
  templateUrl: './images-product.component.html',
  styleUrls: ['./images-product.component.scss']
})
export class ImagesProductComponent implements OnInit {
  constructor(private http:HttpClient){

  }

  ngOnInit(){
    this.http.get(`${hostUrl}/products/get-product/${this.idProduct}`)
    .subscribe((res:any) => {
      console.log(res)
      this.dataProduct = res   
      this.imageUrl = res.thumbnail_image  
    }) 

  }
  
  @Input() idProduct?:string
  dataProduct:any
  imageUrl:string|any

  stateImage:boolean = false

  setImage(image:string){
    console.log(image);
    this.imageUrl = image 
  }
 
  imagesLoaded(state:boolean){
    this.stateImage = state
  }

}
