import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage-service.service';
import { ItemCartStorage } from '../../interfaces/itemCartStorage.interface';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.scss'],
})
export class SelectedProductComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.swatchSize);
  }


  constructor(private storage:LocalStorageService){


  }


  @Input() dataProduct?: object | any;
  @Input() swatchColor: object | any;
  @Input() swatchSize?: object | any;

  addProductCart() {
    console.log(this.dataProduct, this.swatchSize, this.swatchColor);
    const {
      title,
      subtitle, 
      price,
      id: idProductModel,
      thumbnail_image,
    } = this.dataProduct;

    const {
      id: idProductVariant,
      size_id,
      size_us,
      size_arg,
    } = this.swatchSize;

    const { id: color_id, color_us, color_arg } = this.swatchColor;

    const item: ItemCartStorage = {
      title,
      subtitle,
      price,
      idProductModel,
      thumbnail_image,
      idProductVariant,
      size_id,
      size_us,
      size_arg,
      color_id,
      color_us,
      color_arg,
      quantity: 1,
    };

    this.processItemCart(item);
    
    console.log(

      this.storage.getItem('cart_user')
      
    );

  }


 


  processItemCart(item: ItemCartStorage) {
    const cartUser: string | null = localStorage.getItem('cart_user');

    if (!cartUser) {
      const arrayCart: Array<ItemCartStorage> = Array(item);
      localStorage.setItem('cart_user', JSON.stringify(arrayCart));
      return;
    }

    const cartParsed: Array<ItemCartStorage> = JSON.parse(cartUser);

    const verifyProductDuplicate: boolean = cartParsed.some(
      (e:ItemCartStorage) => e.idProductVariant === item.idProductVariant
    );
    console.log(verifyProductDuplicate);

    if (verifyProductDuplicate) {
      cartParsed.forEach((e:ItemCartStorage) => {
        if (e.idProductVariant === item.idProductVariant) {
          e.quantity += 1;
          localStorage.setItem('cart_user', JSON.stringify(cartParsed));
        }
      });
    } else {
      cartParsed.push(item);
      localStorage.setItem('cart_user', JSON.stringify(cartParsed));
    }

  }
}
