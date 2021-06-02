import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, EmailValidator } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ForbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';
import { UsersEditService } from './users-edit.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

  editForm: any;

  id!: number;
  user: User = {};
  errors = '';
  gravatar = '';
  @ViewChild('inputEl') private inputEl!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private service: UsersEditService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.editForm = [];
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id') || '', 10);
      this.id = id;
      // console.log(params)
    });
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      user: this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3), ForbiddenNameValidator(/password/)]],
        email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
        password: [''],
        password_confirmation: [''],
      }),
    }, { });
    this.getEditUserInfo();
  }

  getEditUserInfo = () => {
    this.service.getEditUserInfo(this.id)
      .subscribe(
        response => {
          if (response.user) {
            this.user = response.user;
            this.editForm.patchValue({
              user: {
                name: response.user.name,
                email: response.user.email,
              }
            });
            this.gravatar = response.gravatar;
          }
          if (response.flash) {
            // flashMessage(...response.flash)
            this.toastService.error('Please log in.');
            this.router.navigateByUrl('/');
          }
        },
        error => console.error('Error!', error)
      );
  }

  get name() {
    return this.editForm.get('user').get('name');
  }

  get email() {
    return this.editForm.get('user').get('email');
  }

  get password() {
    return this.editForm.get('user').get('password');
  }

  get password_confirmation() {
    return this.editForm.get('user').get('password_confirmation');
  }

  handleUpdate = (e: Event) => {
    this.service.updateUser(this.id, this.editForm.value)
      .subscribe(
        response => {
          this.inputEl.nativeElement.blur();
          if (response.flash_success) {
            // flashMessage(...response.flash_success)
            this.toastService.success('Profile updated');
            this.editForm.patchValue({
              user: {
                name: '',
                email: '',
              }
            });
            this.getEditUserInfo();
          }
          if (response.error) {
            this.errors = response.error;
          }
        },
        error => console.error('Error!', error)
      );
    e.preventDefault();
  }

}
