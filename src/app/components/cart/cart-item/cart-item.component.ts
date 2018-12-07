import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../interfaces/item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html'
})
export class CartItemComponent implements OnInit {

  @Input() item: Item;

  constructor() {
  }
  ngOnInit() {
  }
}
