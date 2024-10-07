import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { order } from '../services/datatype';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
totalprice:number |undefined
  constructor(private product:ProductService){

  }
  ngOnInit():void{
    this.product.currentCart().subscribe((result)=>{
  
      let price=0
      result.forEach((item)=>{
        if(item.qauntity){
        price=price+(+item.price*+item.qauntity)}
      })
   
      this.totalprice=price+(price/10)+100-(price/10)
    })    
  }
  orderNow(data:{email:string,address:string,contact:string}){
    let user =localStorage.getItem('user')
    let userId=user && JSON.parse(user)
    if(this.totalprice){
      let orderData:order={
        ...data,
        totalprice: this.totalprice,
        userId,
        id: undefined
      }
      this.product.orderNow(orderData).subscribe((result)=>{
        if(result){
          alert("user order is placed")
        }
      })
    }
  }
}
