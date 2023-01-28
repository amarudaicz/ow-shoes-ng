import { Component, OnInit } from '@angular/core';
import { restService } from '../../services/restService/rest-service.service'
import {hostUrl} from "../../app.component";

@Component({
  selector: 'app-latest-releases',
  templateUrl: './latest-releases.component.html',
  styleUrls: ['./latest-releases.component.scss']
})
export class LatestReleasesComponent implements OnInit {
  
  constructor(private rest: restService){}
  
  
  ngOnInit(): void {
    this.cardLoader.length = 10
    this.getProducts()
  }
  
  cardLoader:any[] = []
  lastestProducts?:any
  
  
  getProducts(){
    this.rest.get(`${hostUrl}/products/get-all-products`).subscribe(res =>{
      this.lastestProducts = res

      this.lastestProducts = this.lastestProducts.splice(0, 10)
    })
  }


 


}
