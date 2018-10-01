import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() label;

  @Output()
  public onClicked: EventEmitter<String>;

  constructor() {
      this.onClicked = new EventEmitter();
  }

  ngOnInit() {
  }

  public emit(e) {
      console.log(e);
      this.onClicked.emit(this.label);
  }
}
