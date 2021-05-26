import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersShowComponent } from './users-show/users-show.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: "users", component: UsersIndexComponent },
  { path: "users/new", component: UsersNewComponent },
  { path: "users/:id", component: UsersShowComponent, canActivate: [AuthGuard] },
  { path: "users/:id/edit", component: UsersEditComponent, canActivate: [AuthGuard] },
  { path: "signup", component: UsersNewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
