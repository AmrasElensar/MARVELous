import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterOverviewComponent} from '../../character-overview/character-overview.component';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {ComicOverviewComponent} from '../../comic-overview/comic-overview.component';
import {CreatorOverviewComponent} from '../../creator-overview/creator-overview.component';
import {LoginComponent} from '../../login/login.component';
import {AuthGuard} from '../../guards/auth.guard';
import {RegisterComponent} from '../../register/register.component';
import {UserComponent} from '../../user/user.component';
import {UserResolver} from '../../user/user.resolver';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'characters', component: CharacterOverviewComponent, resolve: {data: UserResolver}},
  {path: 'comics', component: ComicOverviewComponent, resolve: {data: UserResolver}},
  {path: 'comics/character/:characterId', component: ComicOverviewComponent, resolve: {data: UserResolver}},
  {path: 'dashboard', component: DashboardComponent, resolve: {data: UserResolver}},
  {path: 'creators', component: CreatorOverviewComponent, resolve: {data: UserResolver}},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'user', component: UserComponent, resolve: {data: UserResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', useHash: false})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
