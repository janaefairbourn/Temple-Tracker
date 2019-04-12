import { Temple } from './temple.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: "root"
})
export class TempleService {
    templesChanged = new Subject<Temple[]>();
    temples: Temple[] = [];
    maxTempleId: number;
    
    // private temples: Temple[] = [
    //     new Temple(
    //         '1',
    //         'Jordan River', 
    //         'test temple', 
    //         'data:image/jpeg;base64,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',
    //         'this is a test',
    //         'yes'),
    //     new Temple(
    //         '2',
    //         'Salt Lake City', 
    //         'Salt Lake', 
    //         'https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/1/salt-lake-city-temple-at-sunset-bret-barton.jpg',
    //         'this is a test',
    //         'yes')
    //   ];

    constructor(private http: HttpClient) {}

    setTemples(temples: Temple[]) {
        this.temples = temples;
        this.templesChanged.next(this.temples.slice());
    }

    getTemples() {
        this.http.get<{ message: string, temples: Temple[] }>('http://localhost:3000/temples')
            .subscribe(
                (res) => {
                    this.temples = res.temples;
                    this.templesChanged.next(this.temples.slice());
                }, (error: any) => {
                    console.log('Please contact Website Admin')
                }
            );
    }

    getTemple(id: string) {
        for (const temple of this.temples) {
            if (temple.id === id) {
                return temple;
            }
        }
        return null;
    }

    getMaxId(): number {
        let maxId = 0;
    
        for (let temple of this.temples) {
          const currentId = parseInt(temple.id);
          if (currentId > maxId) {
            maxId = currentId;
          }
        }
    
        return maxId;
      }

    addTemple(newTemple: Temple){
        if (!newTemple) {
            return;
        }

        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        newTemple.id = '';

        this.http.post<{ message: string, temple: Temple }>('http://localhost:3000/temples', newTemple, {headers: headers})
            .subscribe(
                (responseData) => {
                    this.temples.push(responseData.temple);
                    this.templesChanged.next(this.temples.slice());
                }
            );
    }

    updateTemple(originalTemple: Temple, newTemple: Temple){
        if (!originalTemple || !newTemple) {
            return;
        }

        const pos = this.temples.indexOf(originalTemple);
        if (pos < 0) {
            return;
        }

        newTemple.id = originalTemple.id;

        const headers = new HttpHeaders ({
            'Content-Type' : 'application/json'
        });

        this.http.put<{ message: string, temple: Temple }>('http://localhost:3000/temples/'
        + originalTemple.id, newTemple, {headers: headers})
            .subscribe(
                (responseData) => {
                    this.temples[pos] = newTemple;
                    this.templesChanged.next(this.temples.slice());
                }
            );
        // this.temples[index] = newTemple;
        // this.templesChanged.next(this.temples.slice());
    }

    deleteTemple(temple: Temple) {
        if(!temple) {
            return;
        }

        const pos = this.temples.indexOf(temple);

        if (pos < 0) {
            return;
        }

        this.http.delete('http://localhost:3000/temples/'
        + temple.id)
            .subscribe(
                (responseData) => {
                    this.temples.splice(pos, 1);
                    this.templesChanged.next(this.temples.slice());
                }
            );
        // this.temples.splice(index, 1);
        // this.templesChanged.next(this.temples.slice());
    }
}