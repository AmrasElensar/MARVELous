import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CharacterOverviewComponent} from './character-overview/character-overview.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MenuModule} from './menu/menu.module';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';
import {HeaderComponent} from './header/header.component';
import {MaterialModule} from './modules/material/material.module';
import {CharacterDetailDialogComponent} from './character-detail-dialog/character-detail-dialog.component';
import {FormsModule} from '@angular/forms';
import {ComicOverviewComponent} from './comic-overview/comic-overview.component';
import {CreatorOverviewComponent} from './creator-overview/creator-overview.component';
import {LoaderComponent} from './utilities/loader/loader.component';
import {LoaderInterceptor} from './interceptors/loader.interceptor';
import {ComicDetailDialogComponent} from './comic-detail-dialog/comic-detail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterOverviewComponent,
    DashboardComponent,
    HeaderComponent,
    CharacterDetailDialogComponent,
    ComicOverviewComponent,
    CreatorOverviewComponent,
    LoaderComponent,
    ComicDetailDialogComponent
  ],
  imports: [
    HttpClientModule,
    NgxPaginationModule,
    MenuModule,
    AppRoutingModule,
    MaterialModule,

    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [CharacterDetailDialogComponent, ComicDetailDialogComponent]
})
export class AppModule {
}
