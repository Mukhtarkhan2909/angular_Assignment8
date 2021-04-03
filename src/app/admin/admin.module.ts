import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './services/user.service';
import { GroupService } from './services/group.service';


@NgModule({
  declarations: [AdminComponent, UserComponent, GroupComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    AdminComponent,
    DashboardComponent
  ],
  providers: [UserService, GroupService]
})
export class AdminModule { }
