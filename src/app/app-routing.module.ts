import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerupdaterproductComponent } from './sellerupdaterproduct/sellerupdaterproduct.component';
import { SearchComponent } from './search/search.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UserauthComponent } from './userauth/userauth.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyordersComponent } from './myorders/myorders.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"seller",component:SellerComponent},
  {path:"seller-home",component:SellerhomeComponent,canActivate:[authGuard]},
  {path:"seller-add-product",component:SellerAddProductComponent,canActivate:[authGuard]},
  {path:"seller-updater-product/:id",component:SellerupdaterproductComponent,canActivate:[authGuard]},
  {path:"search/:query", component:SearchComponent},
  {path:"details/:productId", component:ProductdetailsComponent},
  {path:"userauth",component:UserauthComponent},
  {path:"cartpage",component:CartpageComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"myorder",component:MyordersComponent},
  {path:"**",component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
