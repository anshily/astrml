import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypewriterService {

  public typing(str: string, next: string, interval: number= 20): Observable<TypeResp> {
    return Observable.create((observer) => {
      let i = 0;
      const idx = setInterval(() => {
        observer.next({str: str[i], event: ''});
        // observer.next(this.context);
        if (i < str.length - 1) {
          i++;
        } else {
          clearInterval(idx);
          observer.next({str: '', event: next})
          observer.complete();
        }
      }, interval);
    });
  }
  constructor() { }
}

export class TypeResp {
  public str: string;
  public event: string;
}
