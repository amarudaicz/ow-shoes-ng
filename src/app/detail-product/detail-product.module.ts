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
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';


  
@NgModule({
  declarations: [
    MainDetailComponent,
    ColorSwatchesComponent,
    SizeSwatchesComponent,
    ImagesProductComponent,
    SelectedProductComponent,
    DescriptionProductComponent,
    ModalBuyProductComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule
  ],
  exports:[
    
  ],
  providers:[{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}]
    
})
export class DetailProductModule { }
