import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsfeedsComponent } from './newsfeeds.component';

const routes: Routes = [{ path: '', component: NewsfeedsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsfeedsRoutingModule { }
