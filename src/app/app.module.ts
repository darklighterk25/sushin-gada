// Módulos
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';

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
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { OrdersComponent } from './components/account/orders/orders.component';
import { PointOfSaleComponent } from './components/point-of-sale/point-of-sale.component';
import { PointOfSaleItemComponent } from './components/point-of-sale/pos-item/pos-item.component';
import { PrivacyComponent } from './components/shared/footer/privacy/privacy.component';
import { LocationsComponent } from './components/locations/locations.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TermsComponent } from './components/shared/footer/terms/terms.component';

// Pipes
import { PhonePipe } from './pipes/phone.pipe';

// Rutas
import { APP_ROUTING } from './app.routes';

// Services
import { AccountsService } from './services/accounts/accounts.service';
import { LocationsService } from './services/locations/locations.service';
import { MenuService } from './services/menu/menu.service';
import { OrdersService } from './services/orders/orders.service';

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
    MenuComponent,
    MenuItemComponent,
    NavbarComponent,
    OrdersComponent,
    PointOfSaleComponent,
    PointOfSaleItemComponent,
    PrivacyComponent,
    LocationsComponent,
    SignUpComponent,
    TermsComponent,
    PhonePipe
  ],
  imports: [
    AngularMaterialModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqnxwnZEkGUbXW50Xi4SM92UpItT_7zXE'
    })
  ],
  providers: [
    AccountsService,
    LocationsService,
    MenuService,
    OrdersService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
