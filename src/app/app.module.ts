import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CharacterOverviewComponent} from './character-overview/character-overview.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginateModule} from 'ngx-paginate';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CharacterOverviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginateModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'characters', component: CharacterOverviewComponent}
    ]),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
