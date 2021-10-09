import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthService {

    private isUserLoggedIn = false;

    constructor(
        private http: HttpService
    ) {}

    get isLoggedIn() {
        return LocalStorageService.get('token');
    }

    public login(params: {username: string, password: string, saveMe: boolean}) {
        const path = '/auth/login';
        this.http.post(path, params);
    }

    public register(params: {username: string, password: string}): Observable<any> {
        const path = '/auth/register';
        return this.http.post(path, params);
    }
}