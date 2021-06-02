import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './models/user';
import { environment } from './../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  BASE_URL: string;

  constructor(
    private http: HttpClient
  ) {
    if (environment.production) {
      this.BASE_URL = 'https://railstutorialapi.herokuapp.com/api/';
    } else {
      this.BASE_URL = 'http://localhost:3001/api/';
    }
  }

  registerUser(user: User): Observable<any> {
    const url = `${this.BASE_URL}users`;
    return this.http.post<any>(url, user, { withCredentials: true });
  }

  loginUser(user: User): Observable<any> {
    const url = `${this.BASE_URL}login`;
    return this.http.post<any>(url, user, { withCredentials: true });
  }

  logoutUser(): Observable<any> {
    const url = `${this.BASE_URL}/logout`;
    return this.http.delete(url, { withCredentials: true });
  }

  getToken(): any {
  }

  loggedIn(): any {
  }

  getStatus(): Observable<any> {
    const url = `${this.BASE_URL}sessions`;
    return this.http.get<any>(url, { withCredentials: true });
  }
}
