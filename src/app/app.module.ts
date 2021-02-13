import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsHeaderComponent } from './layouts-header/layouts-header.component';
import { LayoutsFooterComponent } from './layouts-footer/layouts-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsHeaderComponent,
    LayoutsFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
