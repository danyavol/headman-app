import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable()
export class DashboardService {

    constructor(
        private http: HttpService
    ) {}

    public getUsers(): Observable<any> {
        const path = '/api/users';
        return this.http.get(path);
    }

}