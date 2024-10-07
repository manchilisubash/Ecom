import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { cart, order, product } from './datatype';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  cartData = new EventEmitter<product[] |[]>()
  addProduct(data:product){
    return this.http.post("http://localhost:3000/products", data)
  }
  products(){
    return this.http.get<product[]>("http://localhost:3000/products")
  }
  delProducts(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }
  updateProduct(product:product){
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`,product)

  }
  popularProducts(){
    return this.http.get<product[]>("http://localhost:3000/products?_limit=2")
  }
  trendyProduts(){
    return this.http.get<product[]>("http://localhost:3000/products?_limit=8")
  }
  searchProducts(query:string){
    return this.http.get<product[]>(`http://localhost:3000/products?name=${query}`)
  }
  localAddToCart(data:product){
    let cart=[]
    let localcart=localStorage.getItem('localCart')
    if(!localcart){
      localStorage.setItem('localCart', JSON.stringify([data]))
      this.cartData.emit([data])
    }else{
      cart=JSON.parse(localcart)
      cart.push(data)
      localStorage.setItem('localCart', JSON.stringify(cart))
      this.cartData.emit(cart)
    }
  }
  removeFromCart(id:number){
    let carData=localStorage.getItem('localCart')
    if(carData){
    let items = JSON.parse(carData)
     items = items.filter((item:product)=>id!==item.id)
     localStorage.setItem('localCart', JSON.stringify(items))
     this.cartData.emit(items)
    }
  }
  addToCart(cartData:cart){
    return this.http.post("http://localhost:3000/cart", cartData)
  }

  getCartList(userId:string){
    return this.http.get<product[]>('http://localhost:3000/cart?userId='+userId, {observe:'response'}).subscribe((result)=>{
      if(result && result.body){
        this.cartData.emit(result.body)
      }
    })
  }

  removeToCart(cartId:number){
    return this.http.delete('http://localhost:3000/cart/'+cartId)
  }
  currentCart(){
    let userStore= localStorage.getItem('user')
    let userShop = userStore && JSON.parse(userStore)
    return this.http.get<cart[]>('http://localhost:3000/cart?userId='+userShop.id)
  }
  orderNow(data:order){
    return this.http.post('http://localhost:3000/orders', data)
  }
  orderList(){
    let userStore = localStorage.getItem('user')
    let userData =userStore && JSON.parse(userStore)
    return this.http.get<order[]>('http://localhost:3000/orders?userId='+userData.id)
  }
}
