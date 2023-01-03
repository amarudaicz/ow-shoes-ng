import { AfterContentChecked, ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemCartStorage } from 'src/app/interfaces/itemCartStorage.interface';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})

 
export class HeaderComponent implements OnInit, AfterContentChecked {

  constructor(private storage:LocalStorageService, private route:ActivatedRoute){}

  ngOnInit(): void {
    
    
  }
  
  ngAfterContentChecked(): void {
    const cart = this.storage.getItem('cart_user')
    this.cartUser = this.storage.cart
    this.routeActive = this.route.snapshot.children[0].title
  }
  

  public cartUser:any; 
  public cartVisible:boolean = false
  public routeActive?:string;

  public showCart(){
    this.cartVisible = true
    this.disableScroll()
  }

  public updateStateCart(state:boolean){
    this.cartVisible = state 
  }

  disableScroll() {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = () => window.scrollTo(x, y);
  }
    

}