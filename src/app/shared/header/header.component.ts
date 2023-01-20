import { AfterContentChecked, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartUserService } from 'src/app/services/cart-user.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage-service.service';
import { UserService } from 'src/app/services/user/user.service';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HandleAnimationLoginService } from 'src/app/services/handleAnimationLogin/handle-animation-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})

 
export class HeaderComponent implements OnInit, AfterContentChecked {

  constructor(private route:Router, private storage:LocalStorageService, private cartService:CartUserService, private user:UserService, private toast:MatSnackBar, private statesBoxLogin:HandleAnimationLoginService){}

  ngOnInit(): void {
    if (!this.userData) {
      this.userData = {role:'user'}
    }
  }
  
  ngAfterContentChecked(): void {
    this.cartUser = this.storage.getItem('cart_user')    
  }

  public cartUser:any; 
  public userData:any = this.user.data

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