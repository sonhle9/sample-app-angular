import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsHeaderComponent } from './layouts-header/layouts-header.component';
import { LayoutsFooterComponent } from './layouts-footer/layouts-footer.component';
import { SessionsNewComponent } from './sessions-new/sessions-new.component';
import { ShadedApiComponent } from './shaded-api/shaded-api.component';
import { ShadedErrorMessagesComponent } from './shaded-error-messages/shaded-error-messages.component';
import { ShadedFlashMessagesComponent } from './shaded-flash-messages/shaded-flash-messages.component';
import { StaticPagesAboutComponent } from './static-pages-about/static-pages-about.component';
import { StaticPagesContactComponent } from './static-pages-contact/static-pages-contact.component';
import { StaticPagesHelpComponent } from './static-pages-help/static-pages-help.component';
import { StaticPagesHomeComponent } from './static-pages-home/static-pages-home.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { UsersShowComponent } from './users-show/users-show.component';
import { UsersShowFollowersComponent } from './users-show-followers/users-show-followers.component';
import { UsersShowFollowingComponent } from './users-show-following/users-show-following.component';
import { UsersShowFollowComponent } from './users-show-follow/users-show-follow.component';
import { ShadedStatsComponent } from './shaded-stats/shaded-stats.component';

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
    UsersEditComponent,
    UsersIndexComponent,
    UsersNewComponent,
    UsersShowComponent,
    UsersShowFollowersComponent,
    UsersShowFollowingComponent,
    UsersShowFollowComponent,
    ShadedStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
