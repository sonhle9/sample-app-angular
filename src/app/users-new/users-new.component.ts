import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';
import { ToastService } from 'angular-toastify'; 
import { Validators, FormBuilder } from '@angular/forms';
import { ForbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.scss']
})
export class UsersNewComponent implements OnInit {

  registrationForm:any;
  errorMessage = "";

  constructor(
    private fb: FormBuilder, 
    private _auth: AuthService,
    private _router: Router,
    private _toastService: ToastService
  ) { 
    this.registrationForm = [];
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      user: this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3), ForbiddenNameValidator(/password/)]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        password_confirmation: ['', [Validators.required]],
      }),
    }, { /* validator: PasswordValidator */ });
  }

  get name() {
    return this.registrationForm.get('user').get('name');
  }

  get email() {
    return this.registrationForm.get('user').get('email');
  }

  get password() {
    return this.registrationForm.get('user').get('password');
  }

  get password_confirmation() {
    return this.registrationForm.get('user').get('password_confirmation');
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this._auth.registerUser(this.registrationForm.value)
      .subscribe(
        response =>  {
          if (response.user) { 
            this.errorMessage = ""
            this._toastService.info("mes")
            this._router.navigate(['/'])
          }
          if (response.error) { 
            console.log('Error!', response.error)
            this.errorMessage = response.error
          }
        },
        error => console.error('Error!', error)
      );
  }

  // registerUser() {
  //   console.log(this.registerUserData)
  //   this._auth.registerUser(this.registerUserData)
  //   .subscribe(
  //     (res:any) => {
  //       if (res.data.user) {
  //         this.errorMessage = ""
  //         this._toastService.info("mes")
  //         this._router.navigate(['/'])
  //       }
  //       if (res.data.error) {
  //         // this.props.handleSuccessfulAuth(response.data);
  //         this.errorMessage = res.data.error
  //       }
  //       console.log(res)
  //     },
  //     (err:any) => {
  //      console.log(err)
  //      this.errorMessage = err
  //     }
  //   )    
  // }

}
