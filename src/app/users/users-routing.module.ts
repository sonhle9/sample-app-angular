import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersShowComponent } from './users-show/users-show.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { AuthGuard } from '../auth.guard';
import { UsersShowFollowingComponent } from './users-show-following/users-show-following.component';
import { UsersShowFollowersComponent } from './users-show-followers/users-show-followers.component';

const routes: Routes = [
  { path: '', component: UsersIndexComponent },
  { path: 'new', component: UsersNewComponent },
  { path: ':id', component: UsersShowComponent, canActivate: [AuthGuard] },
  { path: ':id/edit', component: UsersEditComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: UsersNewComponent },
  { path: ':id/following', component: UsersShowFollowingComponent },
  { path: ':id/followers', component: UsersShowFollowersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
