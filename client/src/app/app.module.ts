import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';

import { AuthLayoutComponent } from '@core/components/auth-layout/auth-layout.component';
import { UnAuthLayoutComponent } from '@core/components/unauth-layout/unauth-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpAuthInterceptor } from '@core/interceptors/http-auth.interceptor';
import { IconLoaderService } from '@core/icons-loader/icons-loader.service';
import { LogotypeComponent } from './core/components/logotype/logotype.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthLayoutComponent,
        UnAuthLayoutComponent,
        LogotypeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
    ],
    exports: [
        LogotypeComponent,
    ],
    providers: [
        IconLoaderService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
