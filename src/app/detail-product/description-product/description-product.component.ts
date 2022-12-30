import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-product',
  templateUrl: './description-product.component.html',
  styleUrls: ['./description-product.component.scss']
})
export class DescriptionProductComponent {

  @Input() dataProduct:any

}
