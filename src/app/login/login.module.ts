import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainLoginComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  
  ]
})
export class LoginModule { }