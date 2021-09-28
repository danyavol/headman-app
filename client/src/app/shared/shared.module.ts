import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

const IMPORT_AND_EXPORT = [
    FlexLayoutModule,
    MatButtonModule
]

@NgModule({
    declarations: [],
    imports: [
        ...IMPORT_AND_EXPORT
    ],
    exports: [
        ...IMPORT_AND_EXPORT
    ]
})
export class SharedModule { }
