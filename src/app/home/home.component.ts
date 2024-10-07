import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../services/datatype';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  popularProducts:undefined|product[]
  trendyProducts:undefined| product[]
constructor(private product:ProductService){

}
ngOnInit():void{
this.product.popularProducts().subscribe((data)=>{
  this.popularProducts=data
})
this.product.trendyProduts().subscribe((data)=>{this.trendyProducts=data})
this.product.searchProducts("watch").subscribe((data)=>{console.log(data)})
}

}
