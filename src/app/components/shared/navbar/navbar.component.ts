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
  login() {
    this._accountsService.login('padre-de-la-patria@correo.com', '3e6dc62f220c57f4e44e3dd541c175b3a4fd22986bafa16d47ce3d4c2b224ac8')
      .subscribe( ( response ) => {
        this.isLogged = response['loggedIn'];
        this.isEmployee = response['employee'];
      });
  }
  logout() {
    this.isLogged = false;
    this.isEmployee = false;
  }
}
