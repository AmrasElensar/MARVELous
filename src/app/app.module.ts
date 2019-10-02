import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestMarvelComponent } from './test-marvel/test-marvel.component';

@NgModule({
  declarations: [
    AppComponent,
    TestMarvelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
