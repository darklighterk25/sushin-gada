import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../interfaces/address';
import { Order } from '../../interfaces/order';
import { OrdersService } from '../../services/orders/orders.service';
import { faMoneyBill, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {

  address: Address;
  cart: Order;
  disableBtn = true;
  form: FormGroup;
  loading: Boolean = true;

  // Íconos:
  fa_trash = faTrash;
  fa_money_bill = faMoneyBill;
  fa_undo = faUndo;

  constructor( private _ordersService: OrdersService ) {
    this.form = new FormGroup({
      'street': new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\'\\t\\n\\v\\f\\r ' +
            '\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]*')
        ]
      ),
      'number': new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]*')
        ]
      ),
      'interiorNumber': new FormControl(
        '',
        Validators.pattern('[a-zA-Z0-9]*')
      ),
      'neighborhood': new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\'\\t\\n\\v\\f\\r ' +
            '\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]*')
        ]
      ),
      'zipCode': new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(6)
        ]
      ),
      'phone': new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(10)
        ]
      ),
      'cardName': new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\'\\t\\n\\v\\f\\r ' +
            '\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]*')
        ]
      ),
      'cardNumber': new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(16)
        ]
      ),
      'expiration': new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('^(0[1-9]|1[0-2])\\/?([0-9]{4}|[0-9]{2})$')
        ]
      ),
      'ccv': new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(3)
        ]
      )
    });
    // Habilita el botón cuando el formulario es válido.
    this.form.valueChanges.subscribe(
      () => {
        this.disableBtn = !this.form.valid;
      }
    );
  }
  ngOnInit(): void {
    this._ordersService.getCart().subscribe(
      ( cart: Order ) => {
        this.cart = cart;
        this.loading = false;
      }
    );
  }
  purchase(): void {
    const EXPIRATION = this.getExpiration(this.form.get('expiration').value);
    this._ordersService.purchase(
        {
          amount: this.cart.total * 100,
          description: 'Sushin\' Gada',
          card: {
            expMonth: EXPIRATION[0],
            expYear: EXPIRATION[1],
            ccv: this.form.get('ccv').value,
            number: this.form.get('cardNumber').value
          }
        }
      ).subscribe(
      response => {
        console.log( response );
      }
    );
  }
  // Separa el array de la fecha de expiración en mes y año.
  getExpiration ( expiration: string ): string[] {
    const EXPIRATION = expiration.split('/', 2);
    if ( EXPIRATION[1].length === 4 ) {
      EXPIRATION[1] = EXPIRATION[1].substring(2, 4);
    }
    return EXPIRATION;
  }
}
