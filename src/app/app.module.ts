import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityListComponent } from './component/city/city-list/city-list.component';
import {HttpClientModule} from "@angular/common/http";
import { CityCreateComponent } from './component/city/city-create/city-create.component';
import { HomeComponent } from './component/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CityUpdateComponent } from './component/city/city-update/city-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityCreateComponent,
    HomeComponent,
    CityUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
