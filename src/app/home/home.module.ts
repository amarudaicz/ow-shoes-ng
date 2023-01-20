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

@NgModule({
  declarations: [
    BannerPegasusComponent,    
    BannerRunningComponent,
    LatestReleasesComponent, 
    MainHomeComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    MatIconModule,
    MatBadgeModule,
    SharedModule
  ],

  exports:[
    BannerPegasusComponent,
    BannerRunningComponent,
    LatestReleasesComponent
  ]
  
})
export class HomeModule { }
