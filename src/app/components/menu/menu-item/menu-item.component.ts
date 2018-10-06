import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../interfaces/item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }
}
