import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../services/datatype';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: string = 'default'
  sellerName: string = ''
  userName: string = ''
  searchResult: undefined | product[]
  cartItems:number=0
  constructor(private route: Router, private product: ProductService) { }

  ngOnInit(): void {
    this.route.events.subscribe((result: any) => {
      if (result.url) {
        if (localStorage.getItem('seller') && result.url.includes('seller')) {
          let sellerstore = localStorage.getItem('seller')
          let sellershop = sellerstore && JSON.parse(sellerstore)[0]
          this.sellerName = sellershop.name
          this.menuType = 'sellermenu'
        } else if (localStorage.getItem('user')) {
          let userStore= localStorage.getItem('user')
          let userShop = userStore && JSON.parse(userStore)
          this.userName=userShop.name
          this.menuType='usermenu'
          this.product.getCartList(userShop.id)
        }
         else {
          this.menuType = 'default'
        }
      }
    })
   let cartData= localStorage.getItem('localCart')
   if(cartData){
    this.cartItems=JSON.parse(cartData).length
   }
   this.product.cartData.subscribe((result)=> {if(result.length){
      this.cartItems=result.length
   }})
  }

  logout() {
    localStorage.removeItem('seller')
    this.route.navigate(['/'])
  }
  logoutUser() {
    localStorage.removeItem('user')
    this.route.navigate(['/userauth'])
    this.product.cartData.emit([])
  }

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement
      this.product.searchProducts(element.value).subscribe((data) => {
        if (data.length > 5) {
          data.length = 5
        }
        this.searchResult = data
      })
    }
  }
  hideSearch() {
    this.searchResult = undefined
  }
  searching(val: string) {
    this.route.navigate([`/search/${val}`])
  }
  redirectDetails(id: any) {
    this.route.navigate(['/details/' + id])
  }
}