import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CharacterOverviewComponent} from './character-overview/character-overview.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MenuModule} from './menu/menu.module';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';
import {HeaderComponent} from './header/header.component';
import {MaterialModule} from './modules/material/material.module';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CharacterOverviewComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    NgxPaginationModule,
    MenuModule,
    AppRoutingModule,
    MaterialModule,
    NgbCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
