import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerupdaterproductComponent } from './sellerupdaterproduct/sellerupdaterproduct.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"seller",component:SellerComponent},
  {path:"seller-home",component:SellerhomeComponent,canActivate:[authGuard]},
  {path:"seller-add-product",component:SellerAddProductComponent,canActivate:[authGuard]},
  {path:"seller-updater-product/:id",component:SellerupdaterproductComponent,canActivate:[authGuard]},
  {path:"**",component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
