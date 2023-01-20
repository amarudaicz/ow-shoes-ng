import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, MainAdminComponent, HeaderAdminComponent]
})
export class AdminModule { }
