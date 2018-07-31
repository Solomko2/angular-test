import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-labeled-input',
  templateUrl: './labeled-input.component.html',
  styleUrls: ['./labeled-input.component.css']
})
export class LabeledInputComponent implements OnInit {
  @Input() placeholder = '';
  @Input() label = '';
  @Input() id = '';
  @Input() type = 'text';
  @Input() isRequired = false;
  @Input() control = AbstractControl;

  ngOnInit() {
  }

}
