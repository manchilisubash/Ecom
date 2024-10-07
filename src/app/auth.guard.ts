import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { SellerService } from './services/seller.service';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('seller')){
    return true;
  }
  return inject(SellerService).isSelllerLoggedIn;
};
