import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() id: string;
  @Input() label: string;
  @Input() dsId: string[];

  constructor(public ds: DataService) {
  }

  ngOnInit() {
  }

}
