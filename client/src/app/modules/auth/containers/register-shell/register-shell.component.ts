import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '@core/services/authentication.service';
import { ValidationService } from '@core/services/validation.service';
import { AuthApiService } from '@modules/auth/service/auth-api.service';

@Component({
    selector: 'app-register-shell',
    templateUrl: './register-shell.component.html',
    styleUrls: ['./register-shell.component.scss']
})
export class RegisterShellComponent {

    public form = new FormGroup({
        username: new FormControl('', ValidationService.usernameValidators),
        password: new FormControl('', ValidationService.passwordValidators),
        saveMe: new FormControl(false)
    });

    constructor(
        private authApi: AuthApiService,
        private authService: AuthenticationService,
    ) { }

    public submit(): void {
        this.form.markAllAsTouched();
        if (this.form.invalid) return;

        this.authApi.register(this.form.value).subscribe(
            () => {
                this.authService.logIn();
            }
        );
    }

    public getControl(controlName: string): FormControl {
        return this.form.get(controlName) as FormControl;
    }

}
