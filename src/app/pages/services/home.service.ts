import { environment } from './../../../environments/environment';
import { roots } from './../../shared/configs/endPoints';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl: string = environment?.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllCurrencies(): Observable<any> {
    return this.http?.get<any>(`${this.baseUrl}/${roots?.home?.getAllCurrencies}`);
  }
  getCurrenciesData(): Observable<any> {
    return this.http?.get<any>(`${this.baseUrl}/${roots?.home?.getCurrencies}`);
  }
}
