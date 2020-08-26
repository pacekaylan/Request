import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionsComponent } from './missions.component';
import { MissionDetailsComponent } from '../mission-details/mission-details.component'


const routes: Routes = [
  { path: '', component: MissionsComponent },
  { path: 'details', component: MissionDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionsRoutingModule { }
