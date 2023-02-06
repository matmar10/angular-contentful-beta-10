import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContentfulService } from './contentful.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
