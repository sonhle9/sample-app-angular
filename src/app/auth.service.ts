import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { User } from './models/user'

@Injectable()
export class AuthService {

  private BASE_URL = 'https://railstutorialapi.herokuapp.com/api/';
  // private _registerUrl = "http://localhost:3001/api/users";
  // private _loginUrl = "https://railstutorialapi.herokuapp.com/api/login";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user:User) {
    const url = `${this.BASE_URL}users`;
    return this.http.post<any>(url, user)
  }

  loginUser(user:User) {
    const url = `${this.BASE_URL}login`;
    return this.http.post<any>(url, user)
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
    return this.http.get<User>(url)
  }
}
