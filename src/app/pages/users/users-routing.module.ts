import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
  { path: "users", component: IndexComponent },
  { path: "users/new", component: NewComponent },
  { path: "users/:id", component: ShowComponent, canActivate: [AuthGuard], },
  { path: "users/:id/edit", component: EditComponent, canActivate: [AuthGuard], },
  { path: "signup", component: NewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }