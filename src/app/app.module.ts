import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { LayoutsHeaderComponent } from './layouts/layouts-header/layouts-header.component';
import { LayoutsFooterComponent } from './layouts/layouts-footer/layouts-footer.component';
import { StaticPagesHomeComponent } from './static-pages/static-pages-home/static-pages-home.component';
import { StaticPagesAboutComponent } from './static-pages/static-pages-about/static-pages-about.component';
import { StaticPagesContactComponent } from './static-pages/static-pages-contact/static-pages-contact.component';
import { StaticPagesHelpComponent } from './static-pages/static-pages-help/static-pages-help.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './ngrx/app.states';
import { AuthEffects } from './ngrx/effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment
import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StaticPagesHomeService } from './static-pages/static-pages-home/static-pages-home.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { SessionsNewComponent } from './sessions/sessions-new/sessions-new.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsHeaderComponent,
    LayoutsFooterComponent,
    SessionsNewComponent,
    StaticPagesAboutComponent,
    StaticPagesContactComponent,
    StaticPagesHelpComponent,
    StaticPagesHomeComponent,
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
  providers: [AuthService, AuthGuard, ToastService, StaticPagesHomeService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
