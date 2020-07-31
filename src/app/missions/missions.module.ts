import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionsRoutingModule } from './missions-routing.module';
import { MissionsComponent } from './missions.component';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';


@NgModule({
  declarations: [
    MissionsComponent
  ],
  imports: [
    CommonModule,
    MissionsRoutingModule,
    GridModule,
    ExcelModule
  ]
})
export class MissionsModule { }
