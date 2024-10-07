import { Component, OnInit } from '@angular/core';
import { signup } from '../services/datatype';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
show=false
nouserfounderror:string=""
  constructor(private seller:SellerService) { }

  ngOnInit(): void {
    this.seller.sellerreload()
  }

  signup(data:signup):void{
this.seller.signup(data)
  }

  login(data:any){
    this.seller.login(data)
    this.seller.nouserfound.subscribe((result:boolean)=>{
      if(result){
      this.nouserfounderror="invalid email are password"
      }
    }
    )
  }
  tologin(){
    this.show=true

  }
  tosignup(){
    this.show=false
  }
}
