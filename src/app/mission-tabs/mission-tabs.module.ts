import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
//import { MatTabsModule } from '@angular/material/tabs';

import { MissionTabsRoutingModule } from './mission-tabs-routing.module';
import { MissionTabsComponent } from './mission-tabs.component';
import { MissionsComponent } from '../missions/missions.component';
import { MissionDetailsComponent } from '../mission-details/mission-details.component';


@NgModule({
  declarations: [
    MissionTabsComponent,
    MissionsComponent,
    MissionDetailsComponent
  ],
  imports: [
    CommonModule,
    MissionTabsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    DateInputsModule,
    LabelModule,
    InputsModule,
    GridModule,
    ExcelModule,

  ]
})
export class MissionTabsModule { }
