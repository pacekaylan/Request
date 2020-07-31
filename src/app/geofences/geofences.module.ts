import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeofencesRoutingModule } from './geofences-routing.module';
import { GeofencesComponent } from './geofences.component';


@NgModule({
  declarations: [GeofencesComponent],
  imports: [
    CommonModule,
    GeofencesRoutingModule
  ]
})
export class GeofencesModule { }
