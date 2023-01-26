import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerPegasusComponent } from './banner-pegasus/banner-pegasus.component';
import { BannerRunningComponent } from './banner-running/banner-running.component';
import { LatestReleasesComponent } from './latest-releases/latest-releases.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from "swiper/angular";
import { FeaturedProductsComponent } from './featured-products/featured-products.component';

 
@NgModule({
  declarations: [
    BannerPegasusComponent,    
    BannerRunningComponent,
    LatestReleasesComponent, 
    MainHomeComponent,
    FeaturedProductsComponent

    
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    MatIconModule,
    MatBadgeModule,
    SharedModule,
    SwiperModule
  ],

  exports:[
    BannerPegasusComponent,
    BannerRunningComponent,
    LatestReleasesComponent
  ]
  
})
export class HomeModule { }
