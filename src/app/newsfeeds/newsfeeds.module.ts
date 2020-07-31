import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsfeedsRoutingModule } from './newsfeeds-routing.module';
import { NewsfeedsComponent } from './newsfeeds.component';


@NgModule({
  declarations: [NewsfeedsComponent],
  imports: [
    CommonModule,
    NewsfeedsRoutingModule
  ]
})
export class NewsfeedsModule { }
