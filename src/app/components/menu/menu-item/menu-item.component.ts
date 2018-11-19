import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../interfaces/item';
import { MenuService } from '../../../services/menu/menu.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() item: Item;

  constructor( private _menuService: MenuService ) { }

  ngOnInit() { }

  addToCart( quantity: number ) {
    this.item.quantity = quantity;
    this._menuService.addToCart( this.item ).subscribe();
  }

}
