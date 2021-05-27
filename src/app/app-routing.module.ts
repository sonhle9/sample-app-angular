import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionsNewComponent } from './sessions/sessions-new/sessions-new.component';
import { StaticPagesAboutComponent } from './static-pages/static-pages-about/static-pages-about.component';
import { StaticPagesContactComponent } from './static-pages/static-pages-contact/static-pages-contact.component';
import { StaticPagesHelpComponent } from './static-pages/static-pages-help/static-pages-help.component';
import { StaticPagesHomeComponent } from './static-pages/static-pages-home/static-pages-home.component';
// import { UsersEditComponent } from './users-edit/users-edit.component';
// import { UsersIndexComponent } from './users-index/users-index.component';
// import { UsersNewComponent } from './users-new/users-new.component';
// import { UsersShowComponent } from './users-show/users-show.component';
// import { UsersShowFollowComponent } from './users-show-follow/users-show-follow.component';
import { PageNotFoundComponent } from './static-pages/page-not-found/page-not-found.component';
import { EventsComponent } from './others/events/events.component';
import { SpecialEventsComponent } from './others/special-events/special-events.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: "", component: StaticPagesHomeComponent },
  { path: "about", component: StaticPagesAboutComponent },
  { path: "contact", component: StaticPagesContactComponent },
  { path: "help", component: StaticPagesHelpComponent },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  { path: "login", component: SessionsNewComponent },
  // { path: "users/:id/:follow", component: UsersShowFollowComponent },
  
  // Angular Tutorial - 24 - Wildcard Route and Redirecting Routes
  // ng g c PageNotFound -t -s for inline template and style
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special',
    canActivate: [AuthGuard],
    component: SpecialEventsComponent
  },
  { path: '**', component: PageNotFoundComponent }  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
