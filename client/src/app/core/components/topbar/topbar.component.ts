import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

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
