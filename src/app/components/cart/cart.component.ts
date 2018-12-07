import { Component, OnInit } from '@angular/core';
import { Order } from '../../interfaces/order';
import { OrdersService } from '../../services/orders/orders.service';
import { faMoneyBill, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  loading: Boolean = true;
  cart: Order;
  fa_trash = faTrash;
  fa_money_bill = faMoneyBill;
  fa_undo = faUndo;

  constructor( private _ordersService: OrdersService ) {
  }
  ngOnInit() {
    this._ordersService.getCart().subscribe( ( cart: Order ) => {
      this.cart = cart;
      this.loading = false;
    });
  }
  deleteCart() {
    this._ordersService.deleteCart().subscribe(
      () => {
        this.cart = null;
      }
    );
  }
}
