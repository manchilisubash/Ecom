import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType:string='default'
  sellerName:string=''
  constructor(private route:Router){}

  ngOnInit(): void {
    this.route.events.subscribe((result:any)=>{
      if(result.url){
      if(localStorage.getItem('seller') && result.url.includes('seller') ){
 let sellerstore=localStorage.getItem('seller')
let sellershop  = sellerstore && JSON.parse(sellerstore)[0]
this.sellerName=sellershop.name
 this.menuType='sellermenu'
           }else{
            this.menuType='default'
           }}
    })
  }

  logout(){
    localStorage.removeItem('seller')
    this.route.navigate(['/'])
  }
}
