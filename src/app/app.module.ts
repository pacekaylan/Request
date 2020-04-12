import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionsComponent } from './components/missions/missions.component';
import { AgentsComponent } from './components/agents/agents.component';
import { ChartsComponent } from './components/shared/charts/charts.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';







@NgModule({
  declarations: [
    AppComponent,
    MissionsComponent,
    AgentsComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    GaugesModule,
    InputsModule,
    GridModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
