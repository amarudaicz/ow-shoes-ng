import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Scrollbar,Navigation,Autoplay } from "swiper";
import { HttpClient } from "@angular/common/http";
import { hostUrl } from 'src/app/app.component';
SwiperCore.use([Scrollbar, Navigation, Autoplay])

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})


export class FeaturedProductsComponent implements OnInit {


  
  constructor(private http:HttpClient) { }
  
  ngOnInit() {
    this.http.get(`${hostUrl}/products/get-all-products`).subscribe((res:any) =>{
      this.featuredProducts = res

      this.featuredProducts =  this.featuredProducts?.splice(8, 16)
      console.log(this.featuredProducts);
      
    })


  }


  featuredProducts?:any[]

  configSwiper:SwiperOptions = {
    slidesPerView:4, 
    scrollbar:{ draggable: true},
    spaceBetween:30,
    autoplay:{delay:2000},
    speed:300

      

  }

  onSwiper(event:any){

    console.log(event);
    
  }

  slideChange(){
    console.log('CHANGE');

  }


}
