import { Injectable } from '@angular/core';

@Injectable()
export class Temple {
    constructor(public id: string, public name: string, public location: string, 
                public imagePath: string, public experience: string, 
                public attended: string){}
}