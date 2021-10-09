import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthShellComponent } from './containers/auth-shell/auth-shell.component';



@NgModule({
    declarations: [
        AuthShellComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule
    ],
    exports: [
        AuthShellComponent
    ]
})
export class AuthModule { }
