import {Component, Input, OnInit} from '@angular/core';
import Prism from 'prismjs'

@Component({
  selector: 'app-stylerander',
  templateUrl: './stylerander.component.html',
  styleUrls: ['./stylerander.component.css']
})
export class StyleranderComponent implements OnInit {
  @Input() styleText;

  constructor() { }

  ngOnInit() {
  }
  highLight() {
    console.log('highLight');
    return  Prism.highlight(this.styleText, Prism.languages.css);
  }
  styleCode() {
    return `<style>${this.styleText}</style>`;
  }
  onHighlight(e) {
    console.log(e);
  }

}
