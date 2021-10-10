import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginShellComponent } from './containers/login-shell/login-shell.component';
import { RegisterShellComponent } from './containers/register-shell/register-shell.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginShellComponent
    },
    {
        path: 'register',
        component: RegisterShellComponent
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
