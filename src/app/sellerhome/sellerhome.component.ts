import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../services/datatype';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sellerhome',
  templateUrl: './sellerhome.component.html',
  styleUrls: ['./sellerhome.component.css']
})
export class SellerhomeComponent {
  icon=faTrash
  editicon=faEdit
productDetails:undefined|product[]=[]
  constructor(private prod:ProductService){

  }
  ngOnInit(): void {
    this.list()
  }
  
  del(data:number){
    this.prod.delProducts(data).subscribe((result)=>{
      if(result){
        this.list();
      }
    })
  }
  list(){
    this.prod.products().subscribe((result)=>
      {if(result){
        this.productDetails=result } })
  }
}
