import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CharacterOverviewComponent} from './character-overview/character-overview.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginateModule} from 'ngx-paginate';
import {NgxPaginationModule} from 'ngx-pagination';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MenuModule} from './menu/menu.module';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CharacterOverviewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginateModule,
    NgxPaginationModule,
    MenuModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
