import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { cart, product } from '../services/datatype';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  productDetails:undefined|product
  productQantity:number=1
  removeCart: boolean =false
  cartData:product|undefined
constructor(private route:ActivatedRoute, private product:ProductService){

}
ngOnInit():void{
let id=this.route.snapshot.paramMap.get('productId')
id &&this.product.getProduct(id).subscribe((data)=>{this.productDetails=data
  let cartData=localStorage.getItem('localCart')
  if(id && cartData){
    let items = JSON.parse(cartData)
    items = items.filter((item:product)=>id===item.id.toString())
    if(items.length){
      this.removeCart =true
    }else{
      this.removeCart =false
    }
  }
  let user =localStorage.getItem('user')  
  if(user){  
      let userId = user && JSON.parse(user).id
      this.product.getCartList(userId)
      this.product.cartData.subscribe((result)=>{
        let item =result.filter((item:product)=>id?.toString()===item.productId?.toString())
      if(item.length){
        this.cartData = item[0];
        this.removeCart= true}
      })
    }
})
}
handleQuantity(val:string){
if(this.productQantity<20 && val==='plus'){
  this.productQantity+=1
}else if(this.productQantity>1 && val==='minus'){
  this.productQantity-=1
}}
addToCart(){
  if(this.productDetails){
  this.productDetails.qauntity=this.productQantity
  if(!localStorage.getItem('user')){
    this.product.localAddToCart(this.productDetails)
    this.removeCart = true
    }else{
      let user =localStorage.getItem('user')      
      let userId = user && JSON.parse(user).id
      let cartData:cart={
        ...this.productDetails,
        productId: this.productDetails.id,
        userId
      }
      delete cartData.id
      this.product.addToCart(cartData).subscribe((result)=>{if(result){
        this.product.getCartList(userId)
        this.removeCart =true
      }})
    }

}

}
removefromCart(id:number){
  if(!localStorage.getItem('user')){
this.product.removeFromCart(id)

  }else{
this.cartData && this.product.removeToCart(this.cartData.id).subscribe((result)=>{
  let user =localStorage.getItem('user')      
      let userId = user && JSON.parse(user).id
  this.product.getCartList(userId)
})
  }
  this.removeCart=false
}
}
