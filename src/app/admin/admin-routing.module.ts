import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user.component';
import {GroupComponent} from './group/group.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'user', component: UserComponent},
      {path: 'group', component: GroupComponent}
    ]},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
