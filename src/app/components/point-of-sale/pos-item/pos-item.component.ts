import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../interfaces/item';

@Component({
  selector: 'app-pos-item',
  templateUrl: './pos-item.component.html'
})
export class PointOfSaleItemComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

}
