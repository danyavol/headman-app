import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { LayoutModule } from '@angular/cdk/layout';

const NG_MATERIALS = [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
];

const NG_MODULES = [
    FlexLayoutModule,
    ReactiveFormsModule,
    LayoutModule,
];

@NgModule({
    declarations: [
    ValidationErrorComponent
  ],
    imports: [
        CommonModule,
        ...NG_MATERIALS,
        ...NG_MODULES,
    ],
    exports: [
        CommonModule,
        ...NG_MATERIALS,
        ...NG_MODULES,
        ValidationErrorComponent,
    ],
    providers: [
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline', floatLabel: 'auto' } }
    ]
})
export class SharedModule { }
