import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from '../../interfaces/address';
import { Order } from '../../interfaces/order';
import { AccountsService } from '../../services/accounts/accounts.service';
import { OrdersService } from '../../services/orders/orders.service';
import { faMoneyBill, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';

enum CardType {
  None,
  AmericanExpress,
  DinersClub,
  Discover,
  JCB,
  MasterCard,
  Visa
}

enum CardRegExp {
  AmericanExpress = '^[34|37][0-9]{14}$',
  DinersClub = '^3(?:0[0-5]|[68][0-9])[0-9]{11}$',
  Discover = '^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$',
  JCB = '^(?:2131|1800|35\\d{3})\\d{11}$',
  MasterCard = '^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$',
  Visa = '^4[0-9]{12}(?:[0-9]{3})?$'
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {

  address: Address;
  cart: Order;
  cardType: number;
  disableBtn = true;
  disablePromoBtn = true;
  discount = 0;
  error = false;
  form: FormGroup;
  idDiscount = 0;
  invalidPromo = false;
  loading = true;
  loadingPromo = false;
  processing = false;
  promoForm: FormGroup;

  // Íconos:
  fa_trash = faTrash;
  fa_money_bill = faMoneyBill;
  fa_undo = faUndo;

  constructor( private _accountsService: AccountsService,
               private _ordersService: OrdersService,
               private _router: Router) {
    this.cardType = CardType.None;
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
          Validators.minLength(5)
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
          Validators.minLength(14)
        ]
      ),
      'expiration': new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern('^(0[1-9]|1[0-2])\\/?([0-9]{4}|[0-9]{2})$')
        ]
      ),
      'cvc': new FormControl(
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
        this.cardType = this.getCardType();
      }
    );
    // Carga la última dirección utilizada.
    this._accountsService.getBillingAddress().subscribe(
      response => {
        this.address = response['address'];
        this.form.get('street').setValue(response['street']);
        this.form.get('number').setValue(response['number']);
        this.form.get('interiorNumber').setValue(response['interior_number']);
        this.form.get('neighborhood').setValue(response['neighborhood']);
        this.form.get('zipCode').setValue(response['zip_code']);
        this.form.get('phone').setValue(response['phone']);
      }
    );
    // Formulario para el código promocional.
    this.promoForm = new FormGroup( {
      'code': new FormControl('', [ Validators.required, Validators.minLength(6) ] )
    });
    // Habilita el botón cuando el código promocional es válido.
    this.promoForm.valueChanges.subscribe(
      () => {
        this.disablePromoBtn = !this.promoForm.valid;
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
  cancelOrder(): void {
    this._ordersService.deleteCart().subscribe(
      () => {
        this._router.navigate(['/home']);
      }
    );
  }
  getCardType(): number {
    const CARD_NUMBER = this.form.get('cardNumber').value;
    if (CARD_NUMBER.match(CardRegExp.AmericanExpress)) {
      return CardType.AmericanExpress;
    }
    if (CARD_NUMBER.match(CardRegExp.DinersClub)) {
      return CardType.DinersClub;
    }
    if (CARD_NUMBER.match(CardRegExp.Discover)) {
      return CardType.Discover;
    }
    if (CARD_NUMBER.match(CardRegExp.JCB)) {
      return CardType.JCB;
    }
    if (CARD_NUMBER.match(CardRegExp.MasterCard)) {
      return CardType.MasterCard;
    }
    if (CARD_NUMBER.match(CardRegExp.Visa)) {
      return CardType.Visa;
    }
    return CardType.None;
  }
  purchase(): void {
    this.processing = true;
    const EXPIRATION = this.getExpiration(this.form.get('expiration').value);
    this._ordersService.purchase(
        {
          amount: this.cart.total * 100,
          idDiscount: this.idDiscount,
          description: 'Sushin\' Gada',
          address: {
            street: this.form.get('street').value,
            number: this.form.get('number').value,
            interiorNumber: this.form.get('interiorNumber').value,
            neighborhood: this.form.get('neighborhood').value,
            zipCode: this.form.get('zipCode').value,
            phone: this.form.get('phone').value
          },
          card: {
            expMonth: EXPIRATION[0],
            expYear: EXPIRATION[1],
            cvc: this.form.get('cvc').value,
            number: this.form.get('cardNumber').value
          }
        }
      ).subscribe(
      () => {
        this.processing = false;
        this._router.navigate(['/success']);
      },
      () => {
        this.error = true;
        this.processing = false;
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
  getPromoCode( code: string ): void {
    this.loadingPromo = true;
    this._ordersService.getPromoCode( code ).subscribe(
      response => {
        this.discount = response['percentage'];
        this.idDiscount = response['id_discount'];
        this.invalidPromo = false;
        this.loadingPromo = false;
      },
      () => {
        this.loadingPromo = false;
        this.invalidPromo = true;
      }
    );
  }
}
