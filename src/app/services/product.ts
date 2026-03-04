import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ProductArray } from '../types/ProductArray';

@Injectable({
  providedIn: 'root',
})
export class Product {
  baseUrl='https://fakestoreapi.com/products'
  constructor(private  _http:HttpClient) { }

  findAllProducts():Observable<ProductArray[]>{
    return this._http.get<ProductArray[]>(this.baseUrl);
  }
}


