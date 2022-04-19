import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app-component/app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BubbleChartModule, NgxChartsModule} from "@swimlane/ngx-charts";
import { AmmoChartComponent } from './components/ammo-chart/ammo-chart.component';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import { HomeComponent } from './components/home/home.component';
import { MapsComponent } from './components/maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    AmmoChartComponent,
    HomeComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BubbleChartModule,
    NgxChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
