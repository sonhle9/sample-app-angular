import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionsNewComponent } from './pages/sessions/new/new.component';
import { AboutComponent } from './pages/static_pages/about/about.component';
import { ContactComponent } from './pages/static_pages/contact/contact.component';
import { HelpComponent } from './pages/static_pages/help/help.component';
import { HomeComponent } from './pages/static_pages/home/home.component';
import { PageNotFoundComponent } from './pages/static_pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "help", component: HelpComponent },
  { path: "login", component: SessionsNewComponent },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
  },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
