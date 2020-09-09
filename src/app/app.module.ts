 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { HttpClientModule } from '@angular/common/http';


 import { MatToolbarModule } from '@angular/material/toolbar';
 import { MatTabsModule } from '@angular/material/tabs';
 import { FormsModule } from '@angular/forms';
 import { AppRoutingModule } from './app-routing.module';

 import { AppComponent } from './app.component';
 import 'hammerjs';
 import { GaugesModule } from '@progress/kendo-angular-gauges';
 import { InputsModule } from '@progress/kendo-angular-inputs';
 import { ChatModule } from '@progress/kendo-angular-conversational-ui';
 import { NotificationModule } from '@progress/kendo-angular-notification';
 import { MatExpansionModule } from '@angular/material/expansion';
 import { DemosComponent } from './components/demos/demos.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';




 @NgModule({
   declarations: [
     AppComponent,
     DemosComponent,
     SidenavComponent
 
   ],
   imports: [
     BrowserModule,
     BrowserAnimationsModule,
     HttpClientModule,
     MatToolbarModule,
     MatTabsModule,
     AppRoutingModule, 
     FormsModule,
     GaugesModule,
     InputsModule,
     ChatModule,
     NotificationModule,
     MatExpansionModule,
     LayoutModule,
     MatButtonModule,
     MatSidenavModule,
     MatIconModule,
     MatListModule,
     //GridModule
   ],
   providers: [],
   bootstrap: [AppComponent]
 })
 export class AppModule { }

