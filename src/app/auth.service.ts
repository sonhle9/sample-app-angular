import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { User } from './models/user'
import { environment } from './../environments/environment';

@Injectable()
export class AuthService {

  BASE_URL: string;

  constructor(
    private http: HttpClient,
    private _router: Router) 
  { 
    if (environment.production) {
      this.BASE_URL = 'https://railstutorialapi.herokuapp.com/api/';
    } else {
      this.BASE_URL = "http://localhost:3001/api/";
    }
  }

  registerUser(user:User) {
    const url = `${this.BASE_URL}users`;
    return this.http.post<any>(url, user,{ withCredentials: true })
  }

  loginUser(user:User) {
    const url = `${this.BASE_URL}login`;
    return this.http.post<any>(url, user,{ withCredentials: true })
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }

  getStatus() {
    const url = `${this.BASE_URL}sessions`;
    return this.http.get<any>(url,{ withCredentials: true })
  }
}
