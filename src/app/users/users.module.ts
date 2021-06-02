import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './index/index.component';
import { UserNewComponent } from './new/new.component';
import { UserShowComponent } from './show/show.component';
import { UserEditComponent } from './edit/edit.component';
import { ShowFollowingComponent } from './show-following/show-following.component';
import { ShowFollowersComponent } from './show-followers/show-followers.component';
import { UsersIndexService } from './index/index.service';
import { UsersShowService } from './show/show.service';
import { UsersEditService } from './edit/edit.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    UsersComponent,
    UserNewComponent,
    UserShowComponent,
    UserEditComponent,
    ShowFollowingComponent,
    ShowFollowersComponent,
  ],
  providers: [ UsersIndexService, UsersShowService, UsersEditService ],
})
export class UsersModule { }
