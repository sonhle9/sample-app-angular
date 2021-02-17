// import { Observable, of ,throwError} from 'rxjs';
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { User } from './user'; // dataType
// import { USERS } from './mock-users';
// // import { tap, catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   // private _url: string = "/assets/data/users.json";

//   // constructor(private http:HttpClient) { }
//   constructor() { }

//   getUsers(): Observable<User[]>{
//     const users = of(USERS);
//     // return this.http.get<User[]>(this._url)
//     //                 .pipe(tap(data => alert(JSON.stringify(data))) , catchError(this.errorHandler))
//     return users;
//   }

//   // getHeroes(): Observable<Hero[]> {
//   //   const heroes = of(HEROES);
//   //   this.messageService.add('HeroService: fetched heroes');
//   //   return heroes;
//   // }

//   errorHandler(error: HttpErrorResponse){
//     return throwError(error.message || "Server Error");
//   }

// }
// // Angular Tutorial - 19 - Using a Service
// // Angular 6 Tutorial - 31 - Updating your app to angular 6
// // https://update.angular.io/
