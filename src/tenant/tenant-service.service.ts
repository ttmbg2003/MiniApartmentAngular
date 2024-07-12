import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app/common/app.constants'; 
import { Tenant } from '../model/tenant';

const apiTenantUrl = AppConstants.API_URL + 'tenants';
@Injectable({
  providedIn: 'root'
})
export class TenantService {
  constructor(private httpClient: HttpClient) { }
  getData(pageNo:number, pageSize:number): Observable<any> {
		return this.httpClient.get(apiTenantUrl + `/getAllTenant?pageNo=${pageNo}&pageSize=${pageSize}`);
  }
}
