import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterOverviewComponent} from '../../character-overview/character-overview.component';
import {DashboardComponent} from '../../dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'characters', component: CharacterOverviewComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
