import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { Order } from '../../interfaces/order';
import { MenuService } from '../../services/menu/menu.service';
import { OrdersService } from '../../services/orders/orders.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faMoneyBill, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-point-of-sale',
  templateUrl: './point-of-sale.component.html'
})
export class PointOfSaleComponent implements OnInit {

  disablePromoBtn = true;
  error = false;
  idDiscount = 0;
  invalidPromo = false;
  loading = true;
  loadingPromo = false;
  menu: Item[];
  order: Order;
  processing = false;
  promoForm: FormGroup;

  // Íconos:
  fa_trash = faTrash;
  fa_money_bill = faMoneyBill;

  constructor( private _menuService: MenuService,
               private _ordersService: OrdersService) {
    this.resetOrder();
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
  ngOnInit() {
    this._menuService.getMenu()
      .subscribe( ( menu: Item[] ) => {
        this.menu = menu;
        this.loading = false;
      });
  }
  addItem( index: number ): void {
    if (this.itemExists(index)) {
      this.insertInOrder( this.menu[index].idItem );
    } else {
      const AUX = this.menu[index];
      this.order.items.push( AUX );
      this.order.total += AUX.price;
    }
  }
  getPromoCode( code: string ): void {
    this.loadingPromo = true;
    this._ordersService.getPromoCode( code ).subscribe(
      response => {
        this.order.discount = response['percentage'];
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
  itemExists( index: number ): boolean {
    const AUX = this.menu[index].idItem;
    for (let item of this.order.items) {
      if (AUX === item.idItem) {
        return true;
      }
    }
    return false;
  }
  insertInOrder( idItem: number ): number {
    for (let item of this.order.items) {
      if (idItem === item.idItem) {
        item.quantity++;
        this.order.total += item.price;
      }
    }
    return -1;
  }
  purchase(): void {
    this.processing = true;
    this._ordersService.purchaseInRestaurant(
      {
        idDiscount: this.idDiscount
      }
    ).subscribe(
      () => {
        this.resetOrder();
        this.disablePromoBtn = true;
        this.invalidPromo = false;
        this.error = false;
        this.processing = false;
      },
      () => {
        this.error = true;
        this.processing = false;
      }
    );
  }
  resetOrder(): void {
    this.order = {
      id: '',
      closed: false,
      delivered: false,
      date: new Date(),
      discount: 0,
      taxes: 0,
      total: 0,
      items: []
    };
    this.order.items = [];
  }
}
