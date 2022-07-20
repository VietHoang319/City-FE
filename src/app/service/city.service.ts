import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8080/cities';
@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { }

  getAll() : Observable<any> {
    return this.httpClient.get(API_URL)
  }

  create(city:any): Observable<any> {
    return this.httpClient.post(API_URL, city)
  }

  update(id:any, city:any) : Observable<any> {
    return this.httpClient.put(API_URL + `/${id}`, city)
  }

  findById(id:any) : Observable<any> {
    return this.httpClient.get(API_URL + `/${id}`)
  }
}
