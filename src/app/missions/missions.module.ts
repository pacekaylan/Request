import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';

import { MissionsRoutingModule } from './missions-routing.module';
import { MissionsComponent } from './missions.component';
import { MissionDetailsComponent } from '../mission-details/mission-details.component';




@NgModule({
  declarations: [
    MissionsComponent,
    MissionDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    //BrowserModule,
  //  BrowserAnimationsModule,
    MissionsRoutingModule,
    DateInputsModule,
    LabelModule,
    InputsModule,
    GridModule,
    ExcelModule
  ]
})
export class MissionsModule { }
