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

import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {firebaseConfig} from '../environments/environment';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        auth_type: 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [CharacterDetailDialogComponent, ComicDetailDialogComponent]
})
export class AppModule {
}
