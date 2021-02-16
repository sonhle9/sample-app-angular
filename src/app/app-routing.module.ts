import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionsNewComponent } from './sessions-new/sessions-new.component';
import { StaticPagesAboutComponent } from './static-pages-about/static-pages-about.component';
import { StaticPagesContactComponent } from './static-pages-contact/static-pages-contact.component';
import { StaticPagesHelpComponent } from './static-pages-help/static-pages-help.component';
import { StaticPagesHomeComponent } from './static-pages-home/static-pages-home.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { UsersShowComponent } from './users-show/users-show.component';
import { UsersShowFollowComponent } from './users-show-follow/users-show-follow.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", component: StaticPagesHomeComponent },
  { path: "about", component: StaticPagesAboutComponent },
  { path: "contact", component: StaticPagesContactComponent },
  { path: "help", component: StaticPagesHelpComponent },
  { path: "users", component: UsersIndexComponent },
  { path: "users/new", component: UsersNewComponent },
  { path: "users/:id", component: UsersShowComponent },
  { path: "users/:id/edit", component: UsersEditComponent },
  { path: "signup", component: UsersNewComponent },
  { path: "login", component: SessionsNewComponent },
  { path: "users/:id/:follow", component: UsersShowFollowComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  // Angular Tutorial - 24 - Wildcard Route and Redirecting Routes
  // ng g c PageNotFound -t -s for inline template and style
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
