import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { ToastService } from 'angular-toastify';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sessions-new',
  templateUrl: './sessions-new.component.html',
  styleUrls: ['./sessions-new.component.scss']
})
export class SessionsNewComponent implements OnInit {

  loginForm:any;
  errorMessage = "";

  constructor(
    private fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router,
    private _toastService: ToastService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Log in");
    this.loginForm = this.fb.group({
      session: this.fb.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        remember_me: [false],
      }),
    }, { });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this._auth.loginUser(this.loginForm.value)
      .subscribe(
        response =>  {
          console.log(response);
          if (response.user) { 
            this.errorMessage = ""
            this._toastService.info("mes")
            this._router.navigate(['/'])
          }
          if (response.flash) { 
            this.errorMessage = response.flash
          }
        },
        error => console.error('Error!', error)
      );
  }

}
