import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SellerupdaterproductComponent } from './sellerupdaterproduct/sellerupdaterproduct.component';
import { SearchComponent } from './search/search.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UserauthComponent } from './userauth/userauth.component';
import { FooterComponent } from './footer/footer.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyordersComponent } from './myorders/myorders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerComponent,
    ErrorpageComponent,
    SellerhomeComponent,
    SellerAddProductComponent,
    SellerupdaterproductComponent,
    SearchComponent,
    ProductdetailsComponent,
    UserauthComponent,
    FooterComponent,
    CartpageComponent,
    CheckoutComponent,
    MyordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
