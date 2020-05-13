import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UserShowComponent } from './user/user-show/user-show.component';
import { UserManagerComponent } from './user/user-manager/user-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, UserComponent, UserShowComponent, UserManagerComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
