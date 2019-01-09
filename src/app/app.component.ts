import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import index from '../../node_modules/@angular/cli/lib/cli';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'astrml';
  styleText = '  .style-wrapper{\n' +
    '    width: 500px;\n' +
    '    height: 500px;\n' +
    '  }\n' +
    '  .testshow{\n' +
    '    background-color: black;\n' +
    '  }';
  styleRanderText = '';
  ob: Observable<string>;
  ngOnInit(): void {
    this.ob = Observable.create((observer) => {
      let i = 0;
      const idx = setInterval(() => {
        observer.next(this.styleText[i]);
        this.styleRanderText += this.styleText[i];
        console.log(this.styleRanderText)
        if (i < this.styleText.length - 1) {
          i++;
        } else {
          clearInterval(idx);
        }
      }, 100);
    });
  }
  typing() {
    this.ob.subscribe(res => {
      console.log(res);
    });
  }
}
