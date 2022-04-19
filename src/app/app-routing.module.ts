import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AmmoChartComponent} from "./components/ammo-chart/ammo-chart.component";
import {HomeComponent} from "./components/home/home.component";
import {MapsComponent} from "./components/maps/maps.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'maps',
    component: MapsComponent
  },
  {
    path: 'ammo',
    component: AmmoChartComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
