import { Component, OnInit } from '@angular/core';
import { Account } from '../../../interfaces/account';
import { AccountsService } from '../../../services/accounts/accounts.service';
import { Order } from '../../../interfaces/order';
import { OrdersService } from '../../../services/orders/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  account_loading: Boolean = true;
  orders_loading: Boolean = true;
  account: Account = null;
  orders: Order[] = [];

  constructor( private _accountsService: AccountsService,
               private _ordersService: OrdersService ) {
  }
  ngOnInit() {
    this._accountsService.getAccount().subscribe( ( account: Account ) => {
      this.account = account;
      this.account_loading = false;
    });
    this._ordersService.getOrders().subscribe( ( orders: Order[] ) => {
      this.orders = orders;
      this.orders_loading = false;
    });
  }
}
