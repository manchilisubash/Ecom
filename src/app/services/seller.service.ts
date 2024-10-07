import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { login, signup } from './datatype';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  //npm for global installed nodemodules, npx for locally installed node modules in project
isSelllerLoggedIn =new BehaviorSubject<boolean>(false)
nouserfound =new EventEmitter<boolean>(false)
  constructor(private http:HttpClient, private route:Router) { }

  signup(data:signup){
    this.http.post("http://localhost:3000/seller", data,{observe:'response'}).subscribe(
      (result)=>{if(result){
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.route.navigate(['seller-home'])
      }}
    )
  }

  sellerreload(){
    if(localStorage.getItem('seller')){
      this.isSelllerLoggedIn.next(true)
      this.route.navigate(['seller-home'])
    }
  }
   login(data:login){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, {observe:'response'}).subscribe(
      (result:any)=>{
        if(result && result.body && result.body.length===1 && result.body[0].email==data.email && result.body[0].password==data.password){
          this.nouserfound.emit(false)
          localStorage.setItem('seller',JSON.stringify(result.body))
        this.route.navigate(['seller-home'])
        }else{
          this.nouserfound.emit(true)
        }
      }
    )
   }
}
