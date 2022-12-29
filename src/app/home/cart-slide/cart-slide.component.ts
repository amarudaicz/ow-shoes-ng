import { Component, Input, OnInit , Output ,EventEmitter} from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';


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

  constructor(private route: ActivatedRoute){ } 
  
  @Input() cartVisible?:boolean;
  @Output() cartState = new EventEmitter<boolean>();
  
  public user:any = []
  public cartUser:any[] = []
  public totalCart:number = 0

  ngOnInit(){
    this.getCart()
  }

  private getUser(){
 
  }

  private getCart(){
    
    const cart = [
      {
        id:1,
        title:'NIKE AIR MAX',
        subtitle:'high',
        size: 10,
        quantity:1,
        price:10000
      },
      {
        id:2,
        title:'NEW BALANCE 371',
        subtitle:'running',
        size: 10,
        quantity:1,
        price:15000
      }
    ]
    
    this.totalCart = cart.map(e => e.price).reduce((prev, curr)=> prev + curr)
    this.cartUser = cart
  }


  public hideCart(){
    this.cartVisible = false
    this.cartState.emit(this.cartVisible)
  }
}
