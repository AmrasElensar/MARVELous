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
import {CharacterDetailDialogComponent} from './character-detail-dialog/character-detail-dialog.component';
import {MatDialogModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { ComicOverviewComponent } from './comic-overview/comic-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterOverviewComponent,
    DashboardComponent,
    HeaderComponent,
    CharacterDetailDialogComponent,
    ComicOverviewComponent
  ],
  imports: [
    HttpClientModule,
    NgxPaginationModule,
    MenuModule,
    AppRoutingModule,
    MaterialModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CharacterDetailDialogComponent]
})
export class AppModule {
}
