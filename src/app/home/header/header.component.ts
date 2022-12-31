import { AfterContentChecked, ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ItemCartStorage } from 'src/app/interfaces/itemCartStorage.interface';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})

 
export class HeaderComponent implements OnInit, AfterContentChecked {

  constructor(private storage:LocalStorageService){}

  ngOnInit(): void {

  }
    
  ngAfterContentChecked(): void {
    const cart = this.storage.getItem('cart_user')
    this.cartUser = cart
    console.log(this.cartUser);
  }


  public cartUser:any; 
  public cartVisible:boolean = false

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