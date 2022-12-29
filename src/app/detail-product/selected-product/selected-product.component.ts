import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.scss']
})
export class SelectedProductComponent implements OnInit {

  ngOnInit(): void {
    console.log(this.swatchSize);
    
  }

  @Input() swatchColor:object|any
  @Input() swatchSize?:object|any
  

}  
