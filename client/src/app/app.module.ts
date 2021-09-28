import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { StyleGuideModule } from './modules/style-guide/style-guide.module';
import { MatIconModule } from '@angular/material/icon';
import { AuthLayoutComponent } from './core/auth-layout/auth-layout.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthLayoutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        MatIconModule,
        StyleGuideModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
