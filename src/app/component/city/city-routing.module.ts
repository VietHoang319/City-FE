  import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  import {RouterModule, Routes} from "@angular/router";
  import {CityListComponent} from "./city-list/city-list.component";
  import {CityCreateComponent} from "./city-create/city-create.component";
  import {CityUpdateComponent} from "./city-update/city-update.component";

  const routes: Routes = [
    {path: "", component: CityListComponent},
    {path: "create", component: CityCreateComponent},
    {path: "update/:id", component: CityUpdateComponent}
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CityRoutingModule { }
