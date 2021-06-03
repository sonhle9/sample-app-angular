import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersShowComponent } from './users-show/users-show.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { UsersShowFollowingComponent } from './users-show-following/users-show-following.component';
import { UsersShowFollowersComponent } from './users-show-followers/users-show-followers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersEditService } from './users-edit/users-edit.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersShowService } from './users-show/users-show.service';
import { UsersIndexService } from './users-index/users-index.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    UsersEditComponent,
    UsersIndexComponent,
    UsersShowComponent,
    UsersNewComponent,
    UsersShowFollowingComponent,
    UsersShowFollowersComponent
  ],
  providers: [ UsersEditService, UsersShowService, UsersIndexService ],
})
export class UsersModule { }
