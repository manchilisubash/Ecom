import { Component } from '@angular/core';
import { cart, login, product, signup } from '../services/datatype';
import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-userauth',
  templateUrl: './userauth.component.html',
  styleUrls: ['./userauth.component.css']
})
export class UserauthComponent {
  show: boolean = false
  nouserfounderror: string = ""
  constructor(private user: UserService, private prod: ProductService) {

  }
  ngOnInit(): void {
    this.user.userAuthreload()
  }
  signup(val: signup) {
    this.user.userSignup(val)

  }
  login(val: login) {
    this.user.login(val)
    this.user.nouserfound.subscribe((result) => {
      if (result) {
        this.nouserfounderror = "enter valid username and password"
      } else {
        this.user.userId.subscribe((result)=>{
          this.localCartToRemoteCart(result);
        })
      }
    })
  }
  tosignup() {
    this.show = false
  }
  tologin() {
    this.show = true
  }
  getUserId(){
    let user =localStorage.getItem('user')      
    let userId = user && JSON.parse(user).id
    return userId;
  }

  async localCartToRemoteCart(val:string) {
  let data = localStorage.getItem('localCart')
  let user =localStorage.getItem('user')      
  // await this.getUserId();
  let userId = user && JSON.parse(user).id
  // let userId = this.getUserId();
    if(data){
    let cartDataList: product[] =JSON.parse(data)
    cartDataList.forEach((product:product, index)=>{
      let cartData:cart={
        ...product,
        productId:product.id,
        userId
      }
      delete cartData.id
      setTimeout(()=>{
        this.prod.addToCart(cartData).subscribe((result)=>{
          if(result){
            console.warn(result)
          }
        })
      },500)
      if(cartDataList.length===index+1){
        localStorage.removeItem('localCart')
      }
    })
  }
  setTimeout(()=>{
  this.prod.getCartList(userId)},2000)
}
  
}
