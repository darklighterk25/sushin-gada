import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { MenuService} from '../../services/menu/menu.service';

@Component({
  selector: 'app-point-of-sale',
  templateUrl: './point-of-sale.component.html'
})
export class PointOfSaleComponent implements OnInit {

  loading: Boolean = true;
  menu: Item[];

  constructor( private _menuService: MenuService ) {
  }
  ngOnInit() {
    this._menuService.getMenu()
      .subscribe( ( menu: Item[] ) => {
        this.menu = menu;
        this.loading = false;
      });
  }
}
