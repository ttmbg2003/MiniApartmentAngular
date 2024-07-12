import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app/common/app.constants'; 
import { jwtDecode } from "jwt-decode";

const apiUserUrl = AppConstants.API_URL + 'user';
@Injectable({
  providedIn: 'root'
})
export class MyprofileService {

  constructor(private httpClient: HttpClient) {  }
  getUserByEmail(): Observable<any>{
    // const email = this.getEmailCurrentUser();
    const email = "minhtt14@fpt.com";
    if (email) {
      return this.httpClient.get(`${apiUserUrl}/getUserByEmail?email=${email}`);
    } else {
      throw new Error('User email not found');
    }
  }
  getTokenUser() {
    return localStorage.getItem("token");
  }
  getEmailCurrentUser():string | null {
    const token = this.getTokenUser();
    if (token) {
      const decoded:any = jwtDecode(token);
      return decoded.sub;
    } else {
      return null;
    }
  }
}
