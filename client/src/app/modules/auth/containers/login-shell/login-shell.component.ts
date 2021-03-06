import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@core/services/authentication.service';
import { AuthApiService } from '@modules/auth/service/auth-api.service';

@Component({
    selector: 'login-shell',
    templateUrl: './login-shell.component.html',
    styleUrls: ['./login-shell.component.scss']
})
export class LoginShellComponent {

    public form = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        saveMe: new FormControl(false)
    });

    constructor(
        private authApi: AuthApiService,
        private authService: AuthenticationService,
    ) { }

    public submit(): void {
        this.form.markAllAsTouched();
        if (this.form.invalid) return;

        this.authApi.login(this.form.value).subscribe(
            () => {
                this.authService.logIn();
            }
        );
    }

    public getControl(controlName: string): FormControl {
        return this.form.get(controlName) as FormControl;
    }

}
