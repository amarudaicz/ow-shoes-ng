import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component'
import {LoaderComponent} from './loader/loader.component'
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import { CartSlideComponent } from './cart-slide/cart-slide.component';
import {AlertDeleteItemCartDirective} from '../directives/alert-delete-item-cart/alert-delete-item-cart.directive'
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
    CartSlideComponent,
    AlertDeleteItemCartDirective 
     
  ],
  
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    RouterModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[
    HeaderComponent,
    LoaderComponent, 

  ] 

})
export class SharedModule { }
