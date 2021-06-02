import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from 'src/app/models/user';

@Injectable()
export class UsersIndexService {

  BASE_URL: string;

  constructor(
    private http: HttpClient,
  ) 
  { 
    if (environment.production) {
      this.BASE_URL = 'https://railstutorialapi.herokuapp.com/api';
    } else {
      this.BASE_URL = 'http://localhost:3001/api';
    }
  }

  getUsersWhenStartScreen(page: number) {
    const url = `${this.BASE_URL}/users`;
    return this.http.get<User[]>(url, {params: { page }, withCredentials: true});
  }

  removeUser(userid: number, page: number) {
    const url = `${this.BASE_URL}/users/` + userid;
    return this.http.delete<any>(url, {params: { page }, withCredentials: true});
  }
}
