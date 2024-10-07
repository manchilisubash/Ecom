import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../services/datatype';

@Component({
  selector: 'app-sellerupdaterproduct',
  templateUrl: './sellerupdaterproduct.component.html',
  styleUrls: ['./sellerupdaterproduct.component.css']
})
export class SellerupdaterproductComponent {

  Data:undefined|product
  updatemessage:undefined|string
  constructor(private route:ActivatedRoute, private prod:ProductService){

  }
  ngOnInit():void{
    let productId=this.route.snapshot.paramMap.get('id')
    productId && this.prod.getProduct(productId).subscribe((result)=>{
      if(result){
        this.Data=result
      }}
    )
  }
  updateProd(val:product){

    if(this.Data){
      val.id=this.Data.id
    }
    this.prod.updateProduct(val).subscribe((result)=>{
      if(result){
      this.updatemessage="Details are updated"}
    })
    setInterval(()=>{
      this.updatemessage=undefined
          },3000)
  }
}
