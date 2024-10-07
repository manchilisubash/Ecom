import { EventEmitter, Injectable } from '@angular/core';
import { login, signup } from './datatype';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  nouserfound =new EventEmitter<boolean>(false)
  userId =new EventEmitter<string>()
  constructor(private http:HttpClient, private router:Router) { }
  userSignup(user:signup){
this.http.post("http://localhost:3000/users",user,{observe:'response'}).subscribe((result)=>{
  if(result){
    localStorage.setItem('user',JSON.stringify(result.body))
    this.router.navigate(['/'])
  }
})
  }
  userAuthreload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/'])
    }
  }
  login(data:login){
    this.http.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`, {observe:'response'}).subscribe(
      (result:any)=>{
        if(result && result.body && result.body?.length===1 && result.body[0].email==data.email && result.body[0].password==data.password){
          this.nouserfound.emit(false)
          localStorage.setItem('user',JSON.stringify(result.body[0]))
          this.userId.emit(result.body[0].id)
        this.router.navigate(['/'])
        }else{
          this.nouserfound.emit(true)
        }
      }
    )
   }
}
