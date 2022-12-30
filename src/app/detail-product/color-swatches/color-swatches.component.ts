import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductData } from 'src/app/interfaces/product-data.interface';
import { hostUrl } from 'src/app/app.component';
import { restService } from '../../services/restService/rest-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-color-swatches',
  templateUrl: './color-swatches.component.html',
  styleUrls: ['./color-swatches.component.scss'],
})
export class ColorSwatchesComponent implements OnInit {
  constructor(private rest:restService, private route:ActivatedRoute){}
  ngOnInit(){
    this.colorId = String(this.dataProduct.colorSwatches[0].id)
    this.idProduct = this.route.snapshot.queryParams['id'];
    this.getSwatches()
    console.log(this.swatchColor);

  }
  
   
  
  @Input() public dataProduct:ProductData|any;
  @Output() public colorIdEmitter = new EventEmitter<object>();
  @Output() public swatchSizeEmitter = new EventEmitter<object|any>();
  @Input() swatchColor?: object | any;
  @Input() idProduct?: string;
  public colorId?:string|any = 1; 
  public sizeSwatches: any;
  
  public getSwatches() {  
    try {
      this.rest
        .get(
          `${hostUrl}/products/get-variants-bycolor?id=${this.idProduct}&color_id=${this.colorId}`
        )
        .subscribe((res) => {
          this.swatchSizeEmitter.emit(res);
        });
        
    } catch (err) {
      console.log(err);
    }
  }
   
  
  public sendColorSwatch(swatch: object|any) {
    console.log({esto:swatch});
    this.colorIdEmitter.emit(swatch);
    this.colorId = String(swatch.id)
    this.getSwatches()    
  }

}
