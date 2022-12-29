import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductData } from 'src/app/interfaces/product-data.interface';

@Component({
  selector: 'app-color-swatches',
  templateUrl: './color-swatches.component.html',
  styleUrls: ['./color-swatches.component.scss'],
})
export class ColorSwatchesComponent implements OnInit {
  ngOnInit(){}



  @Input() public dataProduct:ProductData|any;
  @Output() public colorIdEmiter = new EventEmitter<object>();
  public colorId?:string
  
  
  public sendColorSwatch(swatch: object|any) {
    this.colorIdEmiter.emit(swatch);
    this.colorId = String(swatch.id)
  }

}
