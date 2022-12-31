import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { restService } from "../../services/restService/rest-service.service";
import { hostUrl } from "../../app.component";
import { ProductData } from 'src/app/interfaces/product-data.interface';


@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.scss']
})

export class MainDetailComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private rest:restService) { 
    
  }

  idProduct?:string;
  swatchColor?:object;
  swatchSize?:object|any;
  dataProduct?:ProductData|any; 
  swatchSizeArray:any;
  
  ngOnInit() {
    this.idProduct = this.route.snapshot.queryParams['id'];
    this.getDataProduct()
    
  }
  
  getDataProduct(){
    this.rest.get(`${hostUrl}/products/get-product/${this.idProduct}`)
    .subscribe((res:any) => {
      this.dataProduct = res
      this.swatchColor = res.colorSwatches[0]
      
    }) 
  }  

  reciveSwatch(swatch: object | any){
    if (swatch.color_arg) {
      this.swatchColor = swatch
      console.log('COLORR');
    }else{
      this.swatchSize = swatch
    }      
  }

  reciveVariants(variants:any){
    this.swatchSizeArray = variants

    if(this.swatchSize){
      const findSelectedSize = this.swatchSizeArray.filter((e:any) => e.size_id === this.swatchSize.size_id)
      
      this.swatchSize=findSelectedSize[0] 
      
    }
    

  }


}
