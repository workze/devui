import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Input() label: string;
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
