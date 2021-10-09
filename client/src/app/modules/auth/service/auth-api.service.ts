import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable()
export class AuthApiService {

    constructor(
        private http: HttpService
    ) {}

    public login(params: {username: string, password: string, saveMe: boolean}): Observable<void> {
        const path = '/auth/login';
        return this.http.post(path, params);
    }

    public register(params: {username: string, password: string}): Observable<void> {
        const path = '/auth/register';
        return this.http.post(path, params);
    }
}