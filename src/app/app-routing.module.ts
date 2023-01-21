import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { MainHomeComponent } from './home/main-home/main-home.component';
import { MainDetailComponent } from './detail-product/main-detail/main-detail.component';
import { MainLoginComponent } from './login/main-login/main-login.component';
import { MainAdminComponent } from './admin/main-admin/main-admin.component';
import {CardsStatsComponent} from './admin/cards-stats/cards-stats.component'
import { ListProductsModelComponent } from './admin/list-products-model/list-products-model.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: MainHomeComponent, title:'Home - OW SHOES'},
  {path: 'detail-product', component: MainDetailComponent, title:'Detail Product - OW SHOES'},
  {path:'login', component:MainLoginComponent , title:'Login - OW SHOES'},

  {path:'admin', component:MainAdminComponent , title:'Admin - OW SHOES',
    children: [
      {
        path: '', // child route path
        component: CardsStatsComponent, // child route component that the router renders
      },
      {
        path: 'listProducts',
        component: ListProductsModelComponent, // another child route component that the router renders
      },
    ]
  }
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