import { Component, OnInit } from '@angular/core';
import { OrdersService} from '../../../services/orders/orders.service';
import { Order } from '../../../interfaces/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {

  loading: Boolean = true;
  orders: Order[];

  constructor( private _ordersService: OrdersService ) {
  }
  ngOnInit() {
    this._ordersService.getOrders().subscribe( ( orders: Order[] ) => {
      this.orders = orders;
    });
    this.loading = false;
  }
}
