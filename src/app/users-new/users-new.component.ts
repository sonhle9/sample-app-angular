import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';
import { ToastService } from 'angular-toastify'; 

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.scss']
})
export class UsersNewComponent implements OnInit {

  // topics = ['Angular', 'React', 'Vue'];
  // userModel = new User('Rob', 'rob@test.com', 5556665566, 'default', 'morning', true);
  // topicHasError = true;
  // submitted = false;
  // errorMsg = '';

  // constructor(private _enrollmentService: EnrollmentService) {}
  registerUserData : any = {
    user: {
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
  }
  errorMessage = ""
  constructor(
    private _auth: AuthService, 
    private _router: Router,
    private _toastService: ToastService
    ) {}
  // constructor(private _auth: AuthService,
  //   private _router: Router) { }

  ngOnInit(): void {
  }

  // validateTopic(value:any) {
  //   if (value === 'default') {
  //     this.topicHasError = true;
  //   } else {
  //     this.topicHasError = false;
  //   }
  // }

  // // onSubmit(userForm:any) {
  // onSubmit() {
  //   // console.log(userForm) (ngSubmit)="onSubmit(userForm)"
  //   console.log(this.userModel)
  //   this.submitted = true;
  //   this._enrollmentService.enroll(this.userModel)
  //     .subscribe(
  //       response => console.log('Success!', response),
  //       error => this.errorMsg = error.statusText
  //     )
  // }

  // registerUser() {
  //   this._auth.registerUser(this.registerUserData)
  //   .subscribe(
  //     (res:any) => {
  //       localStorage.setItem('token', res.token)
  //       this._router.navigate(['/special'])
  //     },
  //     (err:any) => console.log(err)
  //   )      
  // }

  registerUser() {
    console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      (res:any) => {
        if (res.data.user) {
          this.errorMessage = ""
          this._toastService.info("mes")
          this._router.navigate(['/'])
        }
        if (res.data.error) {
          // this.props.handleSuccessfulAuth(response.data);
          this.errorMessage = res.data.error
        }
        console.log(res)
      },
      (err:any) => {
       console.log(err)
       this.errorMessage = err
      }
    )    
  }

}
