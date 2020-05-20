import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';

const clientRoutes: Routes = [
    {path: '', component: ClientComponent}
];

@NgModule({
    imports: [RouterModule.forChild(clientRoutes)],
    exports: [RouterModule]
})

export class ClientRoutingModule {}