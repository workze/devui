import {Component, Inject, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label;
  @Input() type;
  @Input() data;

  constructor() {
  }

  ngOnInit() {
  }

}
