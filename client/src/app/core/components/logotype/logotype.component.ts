import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-logotype',
    templateUrl: './logotype.component.html',
    styleUrls: ['./logotype.component.scss']
})
export class LogotypeComponent {

    @Input() size: 'small' | 'default' | 'big' = 'default';
    @Input() withTitle: boolean = true;

}
