import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = 
[
  { path: 'missions', loadChildren: () => import('./missions/missions.module').then(m => m.MissionsModule) }, 
  { path: 'agents', loadChildren: () => import('./agents/agents.module').then(m => m.AgentsModule) },
  { path: 'newsfeeds', loadChildren: () => import('./newsfeeds/newsfeeds.module').then(m => m.NewsfeedsModule) },
  { path: 'geofences', loadChildren: () => import('./geofences/geofences.module').then(m => m.GeofencesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
