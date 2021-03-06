import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersShowComponent } from './users-show/users-show.component';
import { UsersNewComponent } from './users-new/users-new.component';
// import { AuthGuard } from '../auth.guard';
import { UsersShowFollowComponent } from './users-show-follow/users-show-follow.component';

const routes: Routes = [
  { path: '', component: UsersIndexComponent },
  { path: 'new', component: UsersNewComponent },
  // { path: ':id', component: UsersShowComponent, canActivate: [AuthGuard] },
  { path: ':id', component: UsersShowComponent },
  { path: ':id/edit', component: UsersEditComponent },
  { path: ':id/following', component: UsersShowFollowComponent },
  { path: ':id/followers', component: UsersShowFollowComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
