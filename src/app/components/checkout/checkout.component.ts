import { Component, OnInit } from '@angular/core';
import { Order } from '../../interfaces/order';
import { OrdersService } from '../../services/orders/orders.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {

  loading: Boolean = true;
  cart: Order;

  constructor( private _ordersService: OrdersService ) {
  }
  ngOnInit() {
    this._ordersService.getCart().subscribe( ( cart: Order ) => {
      this.cart = cart;
      this.loading = false;
    });
  }
}
