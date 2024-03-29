import { RouterModule, Routes } from '@angular/router';
import { USER_ROUTES } from './components/account/account.routes';
import { AboutComponent } from './components/shared/footer/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { LocationsComponent } from './components/locations/locations.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReportsComponent } from './components/reports/reports.component';
import { PointOfSaleComponent } from './components/point-of-sale/point-of-sale.component';
import { PrivacyComponent } from './components/shared/footer/privacy/privacy.component';
import { SuccessComponent } from './components/checkout/success/success.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TermsComponent } from './components/shared/footer/terms/terms.component';

const APP_ROUTES: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'account/:user_id', component: AccountComponent, children: USER_ROUTES },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'point-of-sale', component: PointOfSaleComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'terms', component: TermsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
