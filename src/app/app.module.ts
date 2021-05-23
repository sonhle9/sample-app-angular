import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './auth.guard';

import { AuthService } from './auth.service';
import { AuthEffects } from './ngrx/effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './ngrx/app.states';
import { StoreModule } from '@ngrx/store';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/layouts/_header/header.component';
import { FooterComponent } from './pages/layouts/_footer/footer.component';

import { AboutComponent } from './pages/static_pages/about/about.component';
import { ContactComponent } from './pages/static_pages/contact/contact.component';
import { HelpComponent } from './pages/static_pages/help/help.component';
import { HomeComponent } from './pages/static_pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HelpComponent,
    HomeComponent,
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
  providers: [AuthService, AuthGuard, ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
