import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-images-product',
  templateUrl: './images-product.component.html',
  styleUrls: ['./images-product.component.scss']
})
export class ImagesProductComponent implements OnInit {

  ngOnInit(){
    setTimeout(() => {
      this.imageUrl = this.testImages[0]
    }, 3000);
  }

  @Input() dataProduct:any = {}

  testImages:string[]=[
    'https://drifters.com.ar/uploads/product_image/25754/650w_DriftersPDP_DC8903-301_Shot1.jpg',
    'https://drifters.com.ar/uploads/product_image/25755/650w_DriftersPDP_DC8903-301_Shot2.jpg',
    'https://drifters.com.ar/uploads/product_image/25756/650w_DriftersPDP_DC8903-301_Shot3.jpg',
    'https://drifters.com.ar/uploads/product_image/25757/650w_DriftersPDP_DC8903-301_Shot4.jpg',
    'https://drifters.com.ar/uploads/product_image/25759/650w_DriftersPDP_DC8903-301_Shot6.jpg',
    'https://drifters.com.ar/uploads/product_image/25760/650w_DriftersPDP_DC8903-301_Shot7.jpg',
    'https://drifters.com.ar/uploads/product_image/25761/650w_DriftersPDP_DC8903-301_Shot8.jpg',
    'https://drifters.com.ar/uploads/product_image/25762/650w_DriftersPDP_DC8903-301_Shot9.jpg'
  ]


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
