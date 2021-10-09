import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@core/services/authentication.service';
import { AuthApiService } from '@modules/auth/service/auth-api.service';

@Component({
    selector: 'login-shell',
    templateUrl: './login-shell.component.html',
    styleUrls: ['./login-shell.component.scss']
})
export class LoginShellComponent implements OnInit {

    public form = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        saveMe: new FormControl(false)
    });

    constructor(
        private authApi: AuthApiService,
        private authService: AuthenticationService,
    ) { }

    ngOnInit(): void {
    }

    public submit(): void {
        this.form.markAllAsTouched();
        if (this.form.invalid) return;

        this.authApi.login(this.form.value).subscribe(
            () => {
                this.authService.logIn();
            }
        );
    }

}
