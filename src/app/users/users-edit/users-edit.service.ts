import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { User } from 'src/app/models/user';

@Injectable()
export class UsersEditService {

  BASE_URL: string;

  constructor(
    private http: HttpClient,
  ) 
  { 
    if (environment.production) {
      this.BASE_URL = 'https://railstutorialapi.herokuapp.com/api';
    } else {
      this.BASE_URL = "http://localhost:3001/api";
    }
  }

  getEditUserInfo(id: number) {
    const url = `${this.BASE_URL}/users/`+id+`/edit`;
    return this.http.get<any>(url, { withCredentials: true})
  }

  updateUser(id:number, user: User) {
    const url = `${this.BASE_URL}/users/`+id;
    return this.http.patch<any>(url, user, { withCredentials: true })
  }
}
