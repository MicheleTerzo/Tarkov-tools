import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AmmoChartComponent} from "./components/ammo-chart/ammo-chart.component";

const routes: Routes = [
  {
    path: 'ammo',
    component: AmmoChartComponent
  },
  {
    path: '',
    redirectTo: 'ammo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
