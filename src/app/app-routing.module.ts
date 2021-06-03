import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionsNewComponent } from './sessions/sessions-new/sessions-new.component';
import { StaticPagesAboutComponent } from './static-pages/static-pages-about/static-pages-about.component';
import { StaticPagesContactComponent } from './static-pages/static-pages-contact/static-pages-contact.component';
import { StaticPagesHelpComponent } from './static-pages/static-pages-help/static-pages-help.component';
import { StaticPagesHomeComponent } from './static-pages/static-pages-home/static-pages-home.component';
import { PageNotFoundComponent } from './static-pages/page-not-found/page-not-found.component';
import { UsersNewComponent } from './users/users-new/users-new.component';

const routes: Routes = [
  { path: '', component: StaticPagesHomeComponent },
  { path: 'about', component: StaticPagesAboutComponent },
  { path: 'contact', component: StaticPagesContactComponent },
  { path: 'help', component: StaticPagesHelpComponent },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  { path: 'signup', component: UsersNewComponent },
  { path: 'login', component: SessionsNewComponent },
  { path: '**', component: PageNotFoundComponent }  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
