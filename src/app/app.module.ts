// Módulos
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Componentes
import { AboutComponent } from './components/shared/footer/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DashboardComponent } from './components/account/dashboard/dashboard.component';
import { EditComponent } from './components/account/edit/edit.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { OrdersComponent } from './components/account/orders/orders.component';
import { PointOfSaleComponent } from './components/point-of-sale/point-of-sale.component';
import { PointOfSaleItemComponent } from './components/point-of-sale/pos-item/pos-item.component';
import { PrivacyComponent } from './components/shared/footer/privacy/privacy.component';
import { LocationComponent } from './components/locations/location/location.component';
import { LocationsComponent } from './components/locations/locations.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TermsComponent } from './components/shared/footer/terms/terms.component';

// Rutas
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AboutComponent,
    AccountComponent,
    AppComponent,
    CartComponent,
    CartItemComponent,
    CheckoutComponent,
    DashboardComponent,
    EditComponent,
    FooterComponent,
    HomeComponent,
    LoadingComponent,
    MenuComponent,
    MenuItemComponent,
    NavbarComponent,
    OrdersComponent,
    PointOfSaleComponent,
    PointOfSaleItemComponent,
    PrivacyComponent,
    LocationComponent,
    LocationsComponent,
    SignUpComponent,
    TermsComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
