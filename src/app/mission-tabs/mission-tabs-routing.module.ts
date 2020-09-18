import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionTabsComponent } from './mission-tabs.component';
import { MissionsComponent } from '../missions/missions.component';
import { MissionDetailsComponent } from '../mission-details/mission-details.component';


const routes: Routes = [

  {path: '', component: MissionTabsComponent,
  children:[
    { path: 'missions', component: MissionsComponent},
    { path: 'missions/details', component: MissionDetailsComponent}
  ] 
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionTabsRoutingModule { }
