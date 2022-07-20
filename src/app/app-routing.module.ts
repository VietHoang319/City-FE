import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CityListComponent} from "./component/city/city-list/city-list.component";
import {HomeComponent} from "./component/home/home.component";

const routes: Routes = [{
  path: 'cities',
  component: HomeComponent,
  loadChildren: () => import("./component/city/city-routing.module").then(module => module.CityRoutingModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
