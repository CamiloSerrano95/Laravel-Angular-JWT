import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClientManagerComponent } from './client/client-manager/client-manager.component';
import { ClientShowComponent } from './client/client-show/client-show.component';

const clientRoutes: Routes = [
    {path: '', component: ClientComponent},
    {path: 'client/manager', component: ClientManagerComponent},
    {path: 'client/:id', component: ClientShowComponent},
];

@NgModule({
    imports: [RouterModule.forChild(clientRoutes)],
    exports: [RouterModule]
})

export class ClientRoutingModule {}