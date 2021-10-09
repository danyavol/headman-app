import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@modules/dashboard/services/dashboard.service';

@Component({
    selector: 'app-dashboard-shell',
    templateUrl: './dashboard-shell.component.html',
    styleUrls: ['./dashboard-shell.component.scss']
})
export class DashboardShellComponent implements OnInit {

    constructor(private dService: DashboardService) { }

    ngOnInit(): void {
        this.dService.getUsers().subscribe();
    }

}
