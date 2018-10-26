import { Component, OnInit } from '@angular/core';
import { faMoneyBill, faShoppingCart, faStore, faSignOutAlt, faUserAlt, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { AccountsService } from '../../../services/accounts/accounts.service';
import { Order } from '../../../interfaces/order';
import { OrdersService } from '../../../services/orders/orders.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  // Íconos
  money_bill = faMoneyBill;
  shopping_cart = faShoppingCart;
  sign_out_alt = faSignOutAlt;
  store = faStore;
  user_alt = faUserAlt;
  utensils = faUtensils;

  cart: Order;
  isEmployee: Boolean = false;
  isLogged: Boolean = false;
  loading: Boolean = false;
  userID: number;

  constructor( private _accountsService: AccountsService,
               private _ordersService: OrdersService ) {
  }

  ngOnInit() {
    this._ordersService.getCart().subscribe( ( cart: Order ) => {
      this.cart = cart;
    });
    this._accountsService.logged().subscribe( ( response ) => {
      this.isLogged = response['logged_in'] === 'true';
      this.isEmployee = response['employee'] === 'true';
      this.userID = response['id_user'];
      this.loading = false;
    });
  }

  login( email, password ) {
    this.loading = true;
    this._accountsService.login( { email: email, password: password } )
      .subscribe( ( response ) => {
        this.isLogged = response['logged_in'] === 'true';
        this.isEmployee = response['employee'] === 'true';
        this.userID = response['id_user'];
        this.loading = false;
      });
  }

  logout() {
    this._accountsService.logout().subscribe( ( response ) => {
      this.isLogged = response['logged_in'] === 'true';
      this.isEmployee = response['employee'] === 'true';
      this.userID = response['id_user'];
    });
  }

}
