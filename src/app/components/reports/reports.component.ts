import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports/reports.service';
import * as CanvasJS from './canvasjs/canvasjs.min';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styles: []
})
export class ReportsComponent implements OnInit {


  topRestaurant = { name: '', total: 0 };
  topClient = { name: '', quantity: 0 };
  topSpender = { name: '', total: 0 };
  topProduct = { name: '', quantity: 0 };
  salesPerRestaurant = [];
  salesPerProduct = [];
  salesPerProductType = [];
  gender = [];
  salesPerEmployee = [];

  constructor( private _reportsService: ReportsService ) {  }

  ngOnInit() {
    this._reportsService.mostSold().subscribe(
      (response: Object) => {
        this.topProduct.name = response['name'];
        this.topProduct.quantity = response['quantity'];
      }
    );
    this._reportsService.topOrders().subscribe(
      (response: Object) => {
        this.topClient.name = response['name'];
        this.topClient.quantity = response['quantity'];
      }
    );
    this._reportsService.topSales().subscribe(
      (response: Object) => {
        this.topRestaurant.name = response['name'];
        this.topRestaurant.total = response['total'];
      }
    );
    this._reportsService.topSpender().subscribe(
      (response: Object) => {
        this.topSpender.name = response['name'];
        this.topSpender.total = response['total'];
      }
    );
    this._reportsService.salesByBranch().subscribe(
      (response: any[]) => {
        for (let obj of response) {
          this.salesPerRestaurant.push( { y: obj.total, label: obj.name } );
        }
        const SALES_PER_RESTAURANT = new CanvasJS.Chart('salesPerRestaurant', {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: 'Ventas por Sucursal'
          },
          data: [{
            type: 'column',
            dataPoints: this.salesPerRestaurant
          }]
        });
        SALES_PER_RESTAURANT.render();
      }
    );
    this._reportsService.productSales().subscribe(
      (response: any[]) => {
        for (let obj of response) {
          this.salesPerProduct.push( { y: obj.quantity, label: obj.name } );
        }
        const SALES_PER_PRODUCT = new CanvasJS.Chart('salesPerProduct', {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: 'Ventas por Producto'
          },
          data: [{
            type: 'column',
            dataPoints: this.salesPerProduct
          }]
        });
        SALES_PER_PRODUCT.render();
      }
    );
    this._reportsService.salesByType().subscribe(
      (response: any[]) => {
        for (let obj of response) {
          this.salesPerProductType.push( { y: obj.quantity, name: obj.name } );
        }
        const SALES_PER_PRODUCT_TYPE = new CanvasJS.Chart('salesPerProductType', {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: 'Ventas por Tipo de Producto'
          },
          data: [{
            type: 'pie',
            showInLegend: true,
            toolTipContent: '<b>{name}</b>: ${y} (#percent%)',
            indexLabel: '{name} - #percent%',
            dataPoints: this.salesPerProductType
          }]
        });
        SALES_PER_PRODUCT_TYPE.render();
      }
    );
    this._reportsService.genderParity().subscribe(
      (response: any[]) => {
        this.gender = [
          { y: response[0].quantity, name: 'Hombres' },
          { y: response[1].quantity, name: 'Mujeres' },
        ];
        const GENDER = new CanvasJS.Chart('gender', {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: 'Clientes por Género'
          },
          data: [{
            type: 'pie',
            showInLegend: true,
            toolTipContent: '<b>{name}</b>: ${y} (#percent%)',
            indexLabel: '{name} - #percent%',
            dataPoints: this.gender
          }]
        });
        GENDER.render();
      }
    );
    this._reportsService.salesPerEmployee().subscribe(
      (response: any[]) => {
        for (let obj of response) {
          this.gender.push( { y: obj.quantity, label: obj.name } );
        }
        const SALES_PER_EMPLOYEE = new CanvasJS.Chart('salesPerEmployee', {
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: 'Ventas por Empleado'
          },
          data: [{
            type: 'column',
            dataPoints: this.salesPerEmployee
          }]
        });
        SALES_PER_EMPLOYEE.render();
      }
    );
  }
}
