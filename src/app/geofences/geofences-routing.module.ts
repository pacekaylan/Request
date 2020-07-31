import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeofencesComponent } from './geofences.component';

const routes: Routes = [{ path: '', component: GeofencesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeofencesRoutingModule { }
