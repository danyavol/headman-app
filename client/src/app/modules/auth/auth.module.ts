import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginShellComponent } from './containers/login-shell/login-shell.component';
import { AuthApiService } from './service/auth-api.service';
import { RegisterShellComponent } from './containers/register-shell/register-shell.component';



@NgModule({
    declarations: [
        LoginShellComponent,
        RegisterShellComponent,
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule
    ],
    exports: [
        LoginShellComponent,
        RegisterShellComponent,
    ],
    providers: [AuthApiService]
})
export class AuthModule { }
