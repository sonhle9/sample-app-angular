import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { UserService } from './user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './auth.guard';

// import { LoginComponent } from './login/login.component'; Session New
// import { RegisterComponent } from './register/register.component'; User New
import { AuthService } from './auth.service';
import { AuthEffects } from './ngrx/effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './ngrx/app.states';
import { StoreModule } from '@ngrx/store';
import { EventService } from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsHeaderComponent } from './layouts/layouts-header/layouts-header.component';
import { LayoutsFooterComponent } from './layouts/layouts-footer/layouts-footer.component';
import { SessionsNewComponent } from './sessions/sessions-new/sessions-new.component';
import { ShadedApiComponent } from './shaded/shaded-api/shaded-api.component';
import { ShadedErrorMessagesComponent } from './shaded/shaded-error-messages/shaded-error-messages.component';
import { ShadedFlashMessagesComponent } from './shaded/shaded-flash-messages/shaded-flash-messages.component';
import { StaticPagesAboutComponent } from './static-pages/static-pages-about/static-pages-about.component';
import { StaticPagesContactComponent } from './static-pages/static-pages-contact/static-pages-contact.component';
import { StaticPagesHelpComponent } from './static-pages/static-pages-help/static-pages-help.component';
import { StaticPagesHomeComponent } from './static-pages/static-pages-home/static-pages-home.component';
// import { UsersEditComponent } from './users-edit/users-edit.component';
// import { UsersIndexComponent } from './users-index/users-index.component';
// import { UsersNewComponent } from './users-new/users-new.component';
// import { UsersShowComponent } from './users-show/users-show.component';
import { UsersShowFollowersComponent } from './others/users-show-followers/users-show-followers.component';
import { UsersShowFollowingComponent } from './others//users-show-following/users-show-following.component';
import { UsersShowFollowComponent } from './others//users-show-follow/users-show-follow.component';
import { ShadedStatsComponent } from './shaded/shaded-stats/shaded-stats.component';
import { EventsComponent } from './others/events/events.component';
import { SpecialEventsComponent } from './others/special-events/special-events.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StaticPagesHomeService } from './static-pages/static-pages-home/static-pages-home.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsHeaderComponent,
    LayoutsFooterComponent,
    SessionsNewComponent,
    ShadedApiComponent,
    ShadedErrorMessagesComponent,
    ShadedFlashMessagesComponent,
    StaticPagesAboutComponent,
    StaticPagesContactComponent,
    StaticPagesHelpComponent,
    StaticPagesHomeComponent,
    // UsersEditComponent,
    // UsersIndexComponent,
    // UsersNewComponent,
    // UsersShowComponent,
    UsersShowFollowersComponent,
    UsersShowFollowingComponent,
    UsersShowFollowComponent,
    ShadedStatsComponent,
    EventsComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NgbModule,
    AngularToastifyModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
    
    StoreModule.forRoot(reducers),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  // providers: [UserService],
  // providers: [],
  providers: [AuthService, AuthGuard, EventService, ToastService, StaticPagesHomeService, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
