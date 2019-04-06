import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

import { TempleService } from '../temples/temple.service';
import { Temple } from '../temples/temple.model';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient,
                private templeService: TempleService) {}

    storeTemples() {
        return this.http.put('https://temple-tracker-e888e.firebaseio.com/temples.json',
            this.templeService.getTemples());
    }

    getTemples() {
        this.http.get('https://temple-tracker-e888e.firebaseio.com/temples.json')
            .subscribe(
                (temples: Temple[]) => {
                    this.templeService.setTemples(temples);
                }
            );
    }
}