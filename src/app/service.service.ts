import { Injectable } from '@angular/core';
import {Product} from './Product';
import {HttpClient} from '@angular/common/http';
import {Observable, from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  api = "https://5e79ba2b17314d001613352e.mockapi.io/productCar";

  constructor(
    private  Http : HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.Http.get<Product[]>(this.api);
  }
}
