import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserShowComponent } from './user/user-show/user-show.component';
import { UserManagerComponent } from './user/user-manager/user-manager.component';

const adminRoutes: Routes = [
    {path: '', component: UserComponent},
    {path: 'user/manager', component: UserManagerComponent},
    {path: 'user/:id', component: UserShowComponent},
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {

}