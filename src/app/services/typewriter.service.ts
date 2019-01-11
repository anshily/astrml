import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypewriterService {

  private context: string;
  public typing(str: string, interval: number= 50): Observable<string> {
    this.context = '';
    return Observable.create((observer) => {
      let i = 0;
      const idx = setInterval(() => {
        this.context += str[i];
        observer.next(str[i]);
        // observer.next(this.context);
        if (i < str.length - 1) {
          i++;
        } else {
          clearInterval(idx);
          observer.complete();
        }
      }, interval);
    });
  }
  constructor() { }
}
