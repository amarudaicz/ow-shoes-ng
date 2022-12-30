import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CartSlideComponent } from './cart-slide/cart-slide.component';
import { BannerPegasusComponent } from './banner-pegasus/banner-pegasus.component';
import { BannerRunningComponent } from './banner-running/banner-running.component';
import { LatestReleasesComponent } from './latest-releases/latest-releases.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import {MatBadgeModule } from '@angular/material/badge'
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    HeaderComponent,
    CartSlideComponent,
    BannerPegasusComponent,
    BannerRunningComponent,
    LatestReleasesComponent,
    MainHomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    MatBadgeModule,
    MatIconModule
  ],

  exports:[
    HeaderComponent,
    BannerPegasusComponent,
    BannerRunningComponent,
    LatestReleasesComponent
  ]
  
})
export class HomeModule { }
