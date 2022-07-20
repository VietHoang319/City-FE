import { Component, OnInit } from '@angular/core';
import {CityService} from "../../../service/city.service";
import {CountryService} from "../../../service/country.service";
import {Country} from "../../../model/country";
import {FormControl, FormGroup} from "@angular/forms";
import {City} from "../../../model/city";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {
  countries: Country[] = []
  city: any
  addForm = new FormGroup({
    name: new FormControl(),
    area: new FormControl(),
    population: new FormControl(),
    gdp: new FormControl(),
    description: new FormControl(),
    country: new FormControl()
  })

  constructor(private cityService : CityService, private countryService : CountryService, private router : Router) { }

  ngOnInit(): void {
    this.getAllCountry()
  }

  getAllCountry() {
    this.countryService.getAllCountry().subscribe(data => {
      this.countries = data
    }, error => {
      console.log(error)
    })
  }

  addCity() {
    this.city = {
      name: this.addForm.value.name,
      area: this.addForm.value.area,
      population: this.addForm.value.population,
      gdp: this.addForm.value.gdp,
      description: this.addForm.value.description,
      country: {
        id: this.addForm.value.country
      }
    }
    console.log(this.city)
    this.cityService.create(this.city).subscribe(() => {
      alert("ok")
      this.router.navigateByUrl("/cities")
    }, error => {
      console.log(error)
    })
  }
}
