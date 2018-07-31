import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-labeled',
  templateUrl: './labeled.component.html',
  styleUrls: ['./labeled.component.css']
})
export class LabeledComponent implements OnInit {
  @Input() label = '';
  @Input() id = '';
  @Input() isRequired = false;

  constructor() { }

  ngOnInit() {
  }

}
