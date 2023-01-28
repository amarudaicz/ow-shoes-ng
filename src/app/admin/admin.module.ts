import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ListProductsModelComponent } from './list-products-model/list-products-model.component';
import { CardsStatsComponent } from './cards-stats/cards-stats.component';
import { StatsGraphicComponent } from './stats-graphic/stats-graphic.component';
import { StatsGraphicBarComponent } from './stats-graphic-bar/stats-graphic-bar.component';
import { RouterModule } from '@angular/router'
import { NgChartsModule } from 'ng2-charts';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProductModelCrudComponent } from './product-model-crud/product-model-crud.component';
import { FormNewProductComponent } from './form-new-product/form-new-product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormEditProductModelComponent } from './form-edit-product-model/form-edit-product-model.component';
import { SelectVariationsComponent } from './select-variations/select-variations.component';
import { ListProductsVariantsComponent } from './list-products-variants/list-products-variants.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MainAdminComponent,
    HeaderAdminComponent, 
    ListProductsModelComponent, 
    CardsStatsComponent,
    StatsGraphicComponent, 
    StatsGraphicBarComponent,
    ProductModelCrudComponent,
    FormNewProductComponent,
    FormEditProductModelComponent,
    SelectVariationsComponent,
    ListProductsVariantsComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    NgChartsModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule

      
    
  ],
 
})

export class AdminModule { }
 