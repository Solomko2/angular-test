import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() type = 'text';
  @Input() id: string;
  @Input() placeholder = '';
  @Input() control: AbstractControl;

  constructor() { }

  ngOnInit() {
  }

}
