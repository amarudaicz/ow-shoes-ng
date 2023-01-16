import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainAdminComponent } from './main-admin/main-admin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, MainAdminComponent]
})
export class AdminModule { }
