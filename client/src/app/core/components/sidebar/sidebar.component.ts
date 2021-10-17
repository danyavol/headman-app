import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    @Input() sidenav: MatSidenav;

    constructor() { }

    ngOnInit(): void {
    }

    get isMobileView(): boolean {
        return this.sidenav.mode === 'over';
    }

    get isSidenavOpened(): boolean {
        return this.sidenav.opened;
    }

}
