import { Component, OnInit, Input } from '@angular/core';

import { Temple } from '../../temple.model';

@Component({
  selector: 'app-temple-item',
  templateUrl: './temple-item.component.html',
  styleUrls: ['./temple-item.component.css']
})
export class TempleItemComponent implements OnInit {
  @Input() temple: Temple;
  @Input() index: number;

  ngOnInit() {
  }


}
