import {
  Component,
  OnInit,
  AfterContentChecked,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage-service.service';
import { ItemCartStorage } from 'src/app/interfaces/itemCartStorage.interface';
import { CartUserService } from 'src/app/services/cart-user.service';

@Component({ 
  selector: 'app-cart-slide',
  templateUrl: './cart-slide.component.html',
  styleUrls: ['./cart-slide.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,

  animations: [
  
    trigger('openCloseCart', [
      transition(':enter', [
        animate('.1s', keyframes([
          style({transform:'translateX(100%)'}),
          style({transform:'translateX(0px)'}),
        ]))
      ]),

      transition(':leave', [
        animate('5s', keyframes([
          style({transform:'translateX(0px)'}),
          style({transform:'translateX(100%)'}),
        ]))
      ]),
    ]),

    trigger('overlayEnter', [
      transition(':enter', [
        animate('.1s', keyframes([
          style({opacity:0}),
          style({opacity:.7})
        ]))
      ])
    ])


  ],
})
 
export class CartSlideComponent implements OnInit {
  constructor(
    private storage: LocalStorageService,
    public cartService: CartUserService,
  ){}

  ngOnInit() {
    this.getCart();
  }

  //variabels
  public totalCart: number = 0;
  public cartUser:ItemCartStorage[] = []
  public removeItemAlert:boolean = false
  private idProductDeleted?:number

  private mainDiv?:HTMLDivElement
  private alertItem?:HTMLDivElement

  //METHODS
  private getCart() {
    const cart:ItemCartStorage[] = this.storage.getItem('cart_user')
    this.cartUser = cart

    if (!cart) {
      this.totalCart = 0
      return
    }

    if(cart.length !== 0) 
    this.totalCart = cart.map(e => e.price).reduce((prev, curr)=> prev + curr)
    else
    this.totalCart = 0
  }




  public deleteItemCart(id: number, mainDiv:HTMLDivElement, alertItem:HTMLDivElement) {
    
    if(this.mainDiv){
      this.mainDiv.style.transform = 'translatex(0px)';

      if(screen.width < 992)
      this.alertItem!.style.transform = 'translatex(-150%)'
      else
      this.alertItem!.style.transform = 'translatex(-200%)'
    }

    this.idProductDeleted = id;
    this.alertItem = alertItem
    this.mainDiv = mainDiv
    this.mainDiv.style.transform = 'translatex(150%)';

    if(screen.width < 992){
      this.alertItem.style.transform = 'translatex(-150%)'
      return
    }

    this.alertItem.style.transform = 'translatex(-169%)';
  }
  
  public confirmDeleteItemCart(){
    const cartUpdated = this.cartUser.filter(e => e.idProductVariant !== this.idProductDeleted)
    this.storage.setItem('cart_user', cartUpdated)
    this.ngOnInit()
  }

  public declineDeleteItemCart(){
    this.mainDiv!.style.transform = 'translatex(0%)';
    this.alertItem!.style.transform = 'translatex(-200%)' 
  }

  public hideCart() {
    this.cartService.cartState = false;
    this.enableScroll();
  }

  enableScroll() {
    window.onscroll = null;
  }
}
