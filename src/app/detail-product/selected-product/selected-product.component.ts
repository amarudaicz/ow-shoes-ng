import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage-service.service';
import { ItemCartStorage } from '../../interfaces/itemCartStorage.interface';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.scss'],
})
export class SelectedProductComponent implements OnInit {
  ngOnInit(): void {

    this.storage.cart = this.storage.getItem('cart_user')

  } 


  constructor(private storage:LocalStorageService, private alert:NgToastService){


  }


  @Input() dataProduct?: object | any;
  @Input() swatchColor: object | any;
  @Input() swatchSize?: object | any;
  overlayBuyProduct:boolean = false
  productBuy?:ItemCartStorage;

  addProductCart() {    
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
    this.productBuy = item
    this.processItemCart(item);
    this.showSuccess(item)

    setTimeout(()=>{
      this.productBuy = undefined
    },2000) 
     
  }
    
  processItemCart(item: ItemCartStorage) {

    const cartUser: ItemCartStorage[] = this.storage.getItem('cart_user');

    if (!cartUser) {
      const arrayCart: Array<ItemCartStorage> = Array(item);
      localStorage.setItem('cart_user', JSON.stringify(arrayCart));
      return;
    }

    const verifyProductDuplicate: boolean = cartUser.some(
      (e:ItemCartStorage) => e.idProductVariant === item.idProductVariant
    );

    if (verifyProductDuplicate) {
      cartUser.forEach((e:ItemCartStorage) => {
        if (e.idProductVariant === item.idProductVariant) {
          e.quantity += 1;
          localStorage.setItem('cart_user', JSON.stringify(cartUser));
        }
      });
    } else {
      cartUser.push(item);
      localStorage.setItem('cart_user', JSON.stringify(cartUser));
    }

    this.storage.cart = cartUser
    
  }
 
  showSuccess(item:ItemCartStorage){
    this.alert.success({detail:"CORRECTO",summary:`Producto ${item.title} Talle:${item.size_arg} agregado al carrito con exito`, duration:3000});
  }

   


} 
 