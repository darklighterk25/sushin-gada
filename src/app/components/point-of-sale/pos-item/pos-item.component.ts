import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../../interfaces/item';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { OrdersService } from '../../../services/orders/orders.service';

@Component({
  selector: 'app-pos-item',
  templateUrl: './pos-item.component.html'
})
export class PointOfSaleItemComponent implements OnInit {

  @Input() index: number;
  @Input() item: Item;

  @Output() itemSelected: EventEmitter<number>;

  loading = false;
  plus = faPlus;

  constructor( private _ordersService: OrdersService ) {
    this.itemSelected = new EventEmitter();
  }
  ngOnInit(): void {
  }
  addItem(): void {
    this.loading = true;
    this._ordersService.addToCart( this.item ).subscribe(
      () => {
        this.loading = false;
      }
    );
    this.itemSelected.emit( this.index );
  }
}
