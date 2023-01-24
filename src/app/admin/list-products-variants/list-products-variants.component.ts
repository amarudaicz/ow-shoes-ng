import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { hostUrl } from 'src/app/app.component';

@Component({
  selector: 'app-list-products-variants',
  templateUrl: './list-products-variants.component.html',
  styleUrls: ['./list-products-variants.component.scss']
})
export class ListProductsVariantsComponent  implements OnInit {
  constructor(private http:HttpClient){}
  ngOnInit(): void {

    this.http.get(hostUrl + '/admin/get-products-variations?id=' + this.id).subscribe((res:any)=>{
      console.log(res);
      
      this.data = res
    })


    this.http.delete(hostUrl + '/admin/delete-product/256').subscribe((res:any)=>{
      console.log(res);
    })
    
  }


  @Input() id:any

  col: string[] = ['id', 'sku', 'stock', 'price', 'size', 'color'];

  data:any[] = [];


}
