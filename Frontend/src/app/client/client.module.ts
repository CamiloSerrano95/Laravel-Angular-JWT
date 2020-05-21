import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { ClientRoutingModule } from './client-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ClientManagerComponent } from './client/client-manager/client-manager.component';
import { ClientShowComponent } from './client/client-show/client-show.component';



@NgModule({
  declarations: [ClientComponent, HeaderComponent, ClientManagerComponent, ClientShowComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
