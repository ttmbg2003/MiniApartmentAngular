import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tenant } from '../model/tenant';
const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'http://localhost:8080/api/tenants/getAllTenant';
@Injectable({
  providedIn: 'root'
})
export class TenantService {
  constructor(private http: HttpClient) { }
  getData(): Observable<Tenant[]> {
    return this.http.get<Tenant[]>(apiUrl, httpOptions);
  }
}
