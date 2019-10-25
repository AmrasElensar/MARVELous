import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterOverviewComponent} from '../../character-overview/character-overview.component';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {ComicOverviewComponent} from '../../comic-overview/comic-overview.component';
import {CreatorOverviewComponent} from '../../creator-overview/creator-overview.component';
import {AuthorizeGuard} from '../../guards/authorize.guard';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'characters', component: CharacterOverviewComponent, canActivate: [AuthorizeGuard]},
  {path: 'comics', component: ComicOverviewComponent,  canActivate: [AuthorizeGuard]},
  {path: 'comics/character/:characterId', component: ComicOverviewComponent, canActivate: [AuthorizeGuard]},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'creators', component: CreatorOverviewComponent, canActivate: [AuthorizeGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
