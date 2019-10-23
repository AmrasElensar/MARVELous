import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterOverviewComponent} from '../../character-overview/character-overview.component';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {ComicOverviewComponent} from '../../comic-overview/comic-overview.component';
import {CreatorOverviewComponent} from '../../creator-overview/creator-overview.component';
import {LoaderComponent} from '../../utilities/loader/loader.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'characters', component: CharacterOverviewComponent},
  {path: 'comics', component: ComicOverviewComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'creators', component: CreatorOverviewComponent},
  {path: 'test', component: LoaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
