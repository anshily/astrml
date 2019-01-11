import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {
  @Input() markdown

  constructor() { }

  ngOnInit() {
  }

}
