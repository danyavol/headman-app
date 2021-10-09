import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginShellComponent } from './containers/login-shell/login-shell.component';
import { AuthApiService } from './service/auth-api.service';



@NgModule({
    declarations: [
        LoginShellComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule
    ],
    exports: [
        LoginShellComponent
    ],
    providers: [AuthApiService]
})
export class AuthModule { }
