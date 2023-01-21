import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ListProductsModelComponent } from './list-products-model/list-products-model.component';
import { CardsStatsComponent } from './cards-stats/cards-stats.component';
import { RouterModule } from '@angular/router'
import { StatsGraphicComponent } from './stats-graphic/stats-graphic.component';
import { NgChartsModule } from 'ng2-charts';
import { StatsGraphicBarComponent } from './stats-graphic-bar/stats-graphic-bar.component';


@NgModule({
  declarations: [DashboardComponent, MainAdminComponent, HeaderAdminComponent, ListProductsModelComponent, CardsStatsComponent, StatsGraphicComponent, StatsGraphicBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgChartsModule
  ],
 
})

export class AdminModule { }
 