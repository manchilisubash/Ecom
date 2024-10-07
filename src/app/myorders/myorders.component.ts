import { Component } from '@angular/core';
import { order } from '../services/datatype';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent {
orderData:order[]|undefined
constructor(private product:ProductService){

}
ngOnInit():void{
this.product.orderList().subscribe((result)=>{
  if(result){
  this.orderData=result}

})
}
}
