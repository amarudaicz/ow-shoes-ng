import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})


export class HeaderComponent {

  public cartVisible:boolean = false

  public showCart(){
    this.cartVisible = true
  }

  public updateStateCart(state:boolean){
    this.cartVisible = state
  }
}