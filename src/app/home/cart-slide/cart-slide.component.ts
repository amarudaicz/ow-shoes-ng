import { Component, Input, OnInit , Output ,EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges} from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage-service.service';
import { ItemCartStorage } from 'src/app/interfaces/itemCartStorage.interface';


@Component({
  selector: 'app-cart-slide',
  templateUrl: './cart-slide.component.html',
  styleUrls: ['./cart-slide.component.scss'],

  animations: [

    trigger('openCloseCart', [
      state('open', style({
        transform:'translateX(0px)',
      })),

      state('closed', style({
        transform:'translateX(100%)',
      })),

      transition('open => closed', [
        animate('0.3s')
      ]),

      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
 
  ],

})


export class CartSlideComponent implements OnInit, OnChanges {

  constructor(private storage:LocalStorageService){ } 
  
  ngOnInit(){

    this.getCart()

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['cartVisible'].firstChange){

      this.getCart()

    }
    
  }
    


  @Input() cartVisible?:boolean;
  @Output() cartState = new EventEmitter<boolean>();
  @Output() cartEmitter = new EventEmitter<ItemCartStorage[]>();
  
  public cartUser:ItemCartStorage[] = []
  public totalCart:number = 0



  private getCart(){
    const cart=this.storage.getItem('cart_user')
    if (cart) {
      this.cartUser = cart
      this.cartEmitter.emit(this.cartUser)
      this.totalCart = this.cartUser.map(e => e.price).reduce((prev, curr)=> prev + curr)
      
    }
  }


  public hideCart(){
    this.cartVisible = false
    this.cartState.emit(this.cartVisible)
  }
}
 