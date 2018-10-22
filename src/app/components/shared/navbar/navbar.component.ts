import { Component, OnInit } from '@angular/core';
import { faMoneyBill, faShoppingCart, faStore, faSignOutAlt, faUserAlt, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { AccountsService } from '../../../services/accounts/accounts.service';
import { Order } from '../../../interfaces/order';
import { OrdersService } from '../../../services/orders/orders.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  cart: Order;

  // Íconos
  money_bill = faMoneyBill;
  shopping_cart = faShoppingCart;
  sign_out_alt = faSignOutAlt;
  store = faStore;
  user_alt = faUserAlt;
  utensils = faUtensils;

  isLogged: Boolean = false;
  isEmployee: Boolean = false;

  constructor( private _accountsService: AccountsService,
               private _ordersService: OrdersService ) {
  }
  ngOnInit() {
    this._ordersService.getCart().subscribe( ( cart: Order ) => {
      this.cart = cart;
    });
  }
  login(email, password) {
    this._accountsService.login(email, password)
      .subscribe( ( response ) => {
        this.isLogged = response['loggedIn'] === 'true';
        this.isEmployee = response['employee'] === 'true';
      });
  }
  logout() {
    this.isLogged = false;
    this.isEmployee = false;
  }
}
