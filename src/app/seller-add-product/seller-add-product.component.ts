import { Component } from '@angular/core';
import { product } from '../services/datatype';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  productadded: undefined | string
  constructor(private prod: ProductService) { }
  getProduct(data: product) {
    this.prod.addProduct(data).subscribe((result) => {
      if (result) {
        this.productadded = "product is added"
      }
    })
    setInterval(()=>{
this.productadded=undefined
    },3000)
  }
}
