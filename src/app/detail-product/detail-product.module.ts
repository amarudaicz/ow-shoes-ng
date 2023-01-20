import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDetailComponent } from './main-detail/main-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ColorSwatchesComponent } from './color-swatches/color-swatches.component';
import { SizeSwatchesComponent } from './size-swatches/size-swatches.component';
import { ImagesProductComponent } from './images-product/images-product.component';
import { SelectedProductComponent } from './selected-product/selected-product.component'
import {MatIconModule} from '@angular/material/icon';
import { DescriptionProductComponent } from './description-product/description-product.component';
import { ModalBuyProductComponent } from './modal-buy-product/modal-buy-product.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { SharedModule } from '../shared/shared.module';
  
@NgModule({
  declarations: [
    MainDetailComponent,
    ColorSwatchesComponent,
    SizeSwatchesComponent,
    ImagesProductComponent,
    SelectedProductComponent,
    DescriptionProductComponent,
    ModalBuyProductComponent,
  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule,
    NgxImageZoomModule,
    SharedModule
    
  ],

  exports:[
    
  ],
})

export class DetailProductModule { }
