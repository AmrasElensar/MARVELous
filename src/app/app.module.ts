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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComicOverviewComponent} from './comic-overview/comic-overview.component';
import {CreatorOverviewComponent} from './creator-overview/creator-overview.component';
import {LoaderComponent} from './utilities/loader/loader.component';
import {LoaderInterceptor} from './interceptors/loader.interceptor';
import {ComicDetailDialogComponent} from './comic-detail-dialog/comic-detail-dialog.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {firebaseConfig} from '../environments/environment';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserComponent} from './user/user.component';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {UserResolver} from './user/user.resolver';
import {AuthGuard} from './guards/auth.guard';

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
    ComicDetailDialogComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    HttpClientModule,
    NgxPaginationModule,
    MenuModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    AuthService,
    UserService,
    UserResolver,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [CharacterDetailDialogComponent, ComicDetailDialogComponent]
})

export class AppModule {}
