import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardShellComponent } from './containers/dashboard-shell/dashboard-shell.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './services/dashboard.service';
import { SharedModule } from '@shared/shared.module';



@NgModule({
    declarations: [
        DashboardShellComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
    ],
    providers: [
        DashboardService
    ],
    exports: [
        DashboardShellComponent
    ]
})
export class DashboardModule { }
