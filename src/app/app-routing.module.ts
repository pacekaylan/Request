 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';


 const routes: Routes = 
 [
    //{path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  //{ path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
   { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(d => d.DashboardModule) },
   { path: 'missiontabs', loadChildren: () => import('./mission-tabs/mission-tabs.module').then(m => m.MissionTabsModule) }
  //  { path: 'agents', loadChildren: () => import('./agents/agents.module').then(m => m.AgentsModule) },
  //  { path: 'newsfeeds', loadChildren: () => import('./newsfeeds/newsfeeds.module').then(m => m.NewsfeedsModule) },
  //  { path: 'geofences', loadChildren: () => import('./geofences/geofences.module').then(m => m.GeofencesModule) }
 ];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
