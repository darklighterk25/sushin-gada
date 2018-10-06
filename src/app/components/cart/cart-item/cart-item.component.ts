import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../../../interfaces/item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html'
})
export class CartItemComponent implements OnInit {

  @Input() item: Item;
  fa_trash = faTrash;

  constructor() {
  }
  ngOnInit() {
  }
}
