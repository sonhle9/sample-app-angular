import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
  declarations: [
    EditComponent,
    IndexComponent,
    ShowComponent,
    NewComponent,
  ]
})
export class UsersModule { }