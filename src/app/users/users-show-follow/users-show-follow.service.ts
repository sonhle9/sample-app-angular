import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from 'src/app/models/user';

@Injectable()
export class UsersShowFollowService {

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

  getUsersWhenStartScreen(id: number, page: number, lastUrlSegment: string) {
    const url = `${this.BASE_URL}/users/` + id + `/` + lastUrlSegment;
    return this.http.get<User[]>(url, {params: { page }, withCredentials: true});
  }

  removeUser(userid: number) {
    const url = `${this.BASE_URL}/users/` + userid;
    return this.http.delete<any>(url, { withCredentials: true });
  }
}
