import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersShowComponent } from './users-show/users-show.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersEditService } from './users-edit/users-edit.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UsersEditComponent,
    UsersIndexComponent,
    UsersShowComponent,
    UsersNewComponent,
  ],
  providers: [ UsersEditService ],
})
export class UsersModule { }
