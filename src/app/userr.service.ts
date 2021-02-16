import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from './user';
import { tap, catchError } from 'rxjs/operators';



@Injectable()
export class UserService {

  private _url: string = "/assets/data/users.json";

  constructor(private http:HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url)
                    .pipe(tap(data => alert(JSON.stringify(data))) , catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }

}