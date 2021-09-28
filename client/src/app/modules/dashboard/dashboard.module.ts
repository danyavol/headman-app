import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardShellComponent } from './containers/dashboard-shell/dashboard-shell.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
    declarations: [
        DashboardShellComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
    ],
    exports: [
        DashboardShellComponent
    ]
})
export class DashboardModule { }
