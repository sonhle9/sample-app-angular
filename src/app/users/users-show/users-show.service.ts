import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class UsersShowService {

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

  getShowUserPageInfo(id: number, page: number): Observable<any> {
    const url = `${this.BASE_URL}/users/` + id;
    return this.http.get<any>(url, {params: { page }, withCredentials: true});
  }

  deleteHandleUnfollow(id_relationships: any): Observable<any> {
    const url = `${this.BASE_URL}/relationships/` + id_relationships;
    return this.http.delete<any>(url, { withCredentials: true });
  }

  postHandleFollow(id: number): Observable<any> {
    const url = `${this.BASE_URL}/relationships`;
    return this.http.post<any>(url, {followed_id: id}, { withCredentials: true });
  }

  removeMicropost(micropostid: number): Observable<any> {
    const url = `${this.BASE_URL}/microposts/` + micropostid;
    return this.http.delete<any>( url, { withCredentials: true });
  }
}
