import { Component, OnInit } from '@angular/core';
import {CityService} from "../../../service/city.service";
import {City} from "../../../model/city";

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities: City[] = []

  constructor(private cityService : CityService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.cityService.getAll().subscribe(data => {
      this.cities = data
    }, error => {
      console.log(error)
    })
  }
}
