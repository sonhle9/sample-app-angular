import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './index/index.component';
import { UserNewComponent } from './new/new.component';
import { UserShowComponent } from './show/show.component';
import { UserEditComponent } from './edit/edit.component';
import { ShowFollowingComponent } from './show-following/show-following.component';
import { ShowFollowersComponent } from './show-followers/show-followers.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'new', component: UserNewComponent },
  { path: ':id', component: UserShowComponent },
  { path: ':id/edit', component: UserEditComponent },
  { path: ':id/following', component: ShowFollowingComponent },
  { path: ':id/followers', component: ShowFollowersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
