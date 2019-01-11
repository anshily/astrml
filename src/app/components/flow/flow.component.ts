import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnInit {
  @Input() content;

  constructor() { }

  ngOnInit() {
  }
  onHighlight(e) {
     console.log(e);
  }
}
