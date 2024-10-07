import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { cart, priceSummary } from '../services/datatype';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent {
cartData:cart[]|undefined
priceSummary:priceSummary={
  price:0,
  discount:0,
  tax:0,
  delivery:0,
  total:0
}
  constructor(private product:ProductService, private route:Router){

  }
  ngOnInit():void{
    this.product.currentCart().subscribe((result)=>{
      this.cartData=result
      let price=0
      result.forEach((item)=>{
        if(item.qauntity){
        price=price+(+item.price*+item.qauntity)}
      })
      this.priceSummary.price =price,
      this.priceSummary.discount =price/10,
      this.priceSummary.tax=price/10,
      this.priceSummary.delivery=100;
      this.priceSummary.total=price+(price/10)+100-(price/10)
    })    
  }
  checkout(){
this.route.navigate(['/checkout'])
  }
}
