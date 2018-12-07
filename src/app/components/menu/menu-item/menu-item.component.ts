import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../interfaces/item';
import { OrdersService } from '../../../services/orders/orders.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() item: Item;
  loading: boolean;

  constructor( private _ordersService: OrdersService ) {
    this.loading = false;
  }

  ngOnInit() { }

  addToCart( quantity: number ) {
    this.item.quantity = quantity;
    this.loading = true;
    setTimeout( () => {
      this._ordersService.addToCart( this.item ).subscribe(
        () => {
          this.loading = false;
        }
      );
    }, 1000 );
  }

}
