import { AfterContentChecked, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartUserService } from 'src/app/services/cart-user.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage-service.service';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})

 
export class HeaderComponent implements OnInit, AfterContentChecked {

  constructor(private route:Router, 
    private storage:LocalStorageService, 
    public cartService:CartUserService, 
    private toast:MatSnackBar)
  {}

  
  ngOnInit(): void {
    this.userData = this.storage.getItem('user')
    console.log(this.userData);
    
    if (!this.userData) {
      this.storage.setItem('user', {role:'user'})
      this.userData = this.storage.getItem('user')
    }
  }
  
  ngAfterContentChecked(): void {
    this.cartUser = this.storage.getItem('cart_user')    
  }

  public cartUser:any; 
  public userData?:any;

  public showCart(){
    this.cartService.cartState = true
    this.disableScroll()
  }

  public processUser(){
    const configToast:MatSnackBarConfig = {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration:3000,
      panelClass:['toast']
    }

    if(this.storage.getItem('tkow')){
      this.toast.open(`Ya estas registrado(a) como ${this.userData.name}`, 'Cerrar Session', configToast).onAction().subscribe(()=>{
        this.storage.clearStorage()
        this.toast.open('Tu session ha sido cerrada', undefined, configToast)
      });
      return
    }

    this.route.navigate(['/login'])
    
  }

  disableScroll() {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = () => window.scrollTo(x, y);
  }
    

}