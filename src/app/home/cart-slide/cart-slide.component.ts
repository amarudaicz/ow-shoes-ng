import { Component, Input, OnInit , Output ,EventEmitter} from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage-service.service';


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
        animate('3.3s')
      ]),

      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
 
  ],

})


export class CartSlideComponent implements OnInit {

  constructor(private storage:LocalStorageService){ } 
  
  @Input() cartVisible?:boolean;
  @Output() cartState = new EventEmitter<boolean>();
  
  public user:any = []
  public cartUser:any[] = []
  public totalCart:number = 0

  ngOnInit(){
    this.getCart()
  }


  private getCart(){
    this.cartUser = this.storage.getItem('cart_user')
    this.totalCart = this.cartUser.map(e => e.price).reduce((prev, curr)=> prev + curr)
  }


  public hideCart(){
    this.cartVisible = false
    this.cartState.emit(this.cartVisible)
  }
}
