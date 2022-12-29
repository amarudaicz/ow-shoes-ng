import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { MainHomeComponent } from './home/main-home/main-home.component';
import { MainDetailComponent } from './detail-product/main-detail/main-detail.component';

const routes: Routes = [
  { path: '', component: MainHomeComponent, title:'Home - OW SHOES'},
  { path: 'detail-product', component: MainDetailComponent, title:'Detail Product - OW SHOES'},
  
]; 

@NgModule({
  declarations: [],

  imports: [
    RouterModule.forRoot(routes),
    CommonModule
    

  ],
  exports: [RouterModule]
})



export class AppRoutingModule {}