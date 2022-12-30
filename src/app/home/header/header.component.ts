import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})


export class HeaderComponent implements OnInit {

  constructor(private storage:LocalStorageService){}

  ngOnInit(): void {
    this.totalItemsCart = this.storage.getItem('cart_user').length
  }

  public cartVisible:boolean = false
  public totalItemsCart?:number

  public showCart(){
    this.cartVisible = true
    console.log('asddsa')
  }

  public updateStateCart(state:boolean){
    this.cartVisible = state
    console.log('1213');
    
  }
}