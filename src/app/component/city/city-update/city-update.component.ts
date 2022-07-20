import { Component, OnInit } from '@angular/core';
import {Country} from "../../../model/country";
import {FormControl, FormGroup} from "@angular/forms";
import {CityService} from "../../../service/city.service";
import {CountryService} from "../../../service/country.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-city-update',
  templateUrl: './city-update.component.html',
  styleUrls: ['./city-update.component.css']
})
export class CityUpdateComponent implements OnInit {
  countries: Country[] = []
  id: number = 0
  city: any
  updateForm = new FormGroup({
    name: new FormControl(),
    area: new FormControl(),
    population: new FormControl(),
    gdp: new FormControl(),
    description: new FormControl(),
    country: new FormControl()
  })

  constructor(private cityService : CityService, private countryService : CountryService,
              private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllCountry()
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get("id"); // Lấy id từ URL
      this.findById(this.id)
    })
  }

  getAllCountry() {
    this.countryService.getAllCountry().subscribe(data => {
      this.countries = data
    }, error => {
      console.log(error)
    })
  }

  findById(id:number) {
    this.cityService.findById(id).subscribe(data => {
      this.updateForm.patchValue({
        name: data.name,
        area: data.area,
        population: data.population,
        gdp: data.gdp,
        description: data.description,
        country: data.country.id
      })
    }, error => {
      console.log(error)
    })
  }

  updateCity() {
    this.city = {
      name: this.updateForm.value.name,
      area: this.updateForm.value.area,
      population: this.updateForm.value.population,
      gdp: this.updateForm.value.gdp,
      description: this.updateForm.value.description,
      country: {
        id: this.updateForm.value.country
      }
    }
    this.cityService.update(this.id, this.city).subscribe(() => {
      alert("ok")
      this.router.navigateByUrl("/cities")
    }, error => {
      console.log(error)
    })
  }
}
