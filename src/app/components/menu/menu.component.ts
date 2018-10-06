import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { MenuService} from '../../services/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  loading: Boolean = true;
  menu: Item[] = [];

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
