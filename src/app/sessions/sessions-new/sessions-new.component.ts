import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router'
import { ToastService } from 'angular-toastify';
import { Title } from '@angular/platform-browser';
import { User } from '../../models/user';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../ngrx/app.states';
import { LogIn } from '../../ngrx/actions/auth.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sessions-new',
  templateUrl: './sessions-new.component.html',
  styleUrls: ['./sessions-new.component.scss']
})
export class SessionsNewComponent implements OnInit {

  user: User = new User();
  loginForm:any;
  errorMessage = "";
  getState: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router,
    private _toastService: ToastService,
    private titleService: Title,
    private store: Store<AppState>
  ) { 
    this.loginForm = [];
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.titleService.setTitle("Log in");
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
    this.loginForm = this.fb.group({
      session: this.fb.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        remember_me: [false],
      }),
    }, { });
  }

  onSubmit() {
    // const payload = {
    //   email: this.loginForm.value.email,
    //   password: this.loginForm.value.password
    // };
    this.store.dispatch(new LogIn(this.loginForm.value));
    // this._auth.loginUser(this.loginForm.value)
    //   .subscribe(
    //     response =>  {
    //       console.log(response);
    //       if (response.user) { 
    //         this.errorMessage = ""
    //         this._toastService.info("mes")
    //         this._router.navigate(['/'])
    //       }
    //       if (response.flash) { 
    //         this.errorMessage = response.flash
    //       }
    //     },
    //     error => console.error('Error!', error)
    //   );
  }

}
