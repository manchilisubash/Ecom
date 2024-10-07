import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../services/datatype';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
productResults:undefined|product[]
error:boolean=false
  constructor(private route:ActivatedRoute, private product:ProductService){

  }
  ngOnInit():void{
    let query=this.route.snapshot.paramMap.get('query')
    query && this.product.searchProducts(query).subscribe((data)=>{
if(data.length==0){
 this.error=true;
}
      this.productResults=data;
    })
  }
}
