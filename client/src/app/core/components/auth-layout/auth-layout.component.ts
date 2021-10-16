import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
    selector: 'app-auth-layout',
    templateUrl: './auth-layout.component.html',
    styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

    public mode: MatDrawerMode;
    public opened: boolean;

    constructor(private observer: BreakpointObserver) { }

    ngOnInit() {
        this.observer.observe(['(max-width: 960px)']).subscribe(res => {
            if (res.matches) {
                this.mode = 'over';
                this.opened = false;
            } else {
                this.mode = 'side';
                this.opened = true;
            }
        });
    }

}
