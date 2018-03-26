import { Component } from '@angular/core';
import { LoginService } from './services/Login.service';
import {AuthHttpService} from './services/auth-http.service';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers : [LoginService,AuthHttpService] 
       
})

export class HomeComponent {

   public Home : home[];
    public resp : any;
 

  constructor(private postsService : LoginService) {
      debugger;
     this.postsService.login('kvora2@spdemo5.demo.kv','Khyati@Vora18sIESue8gUzh9E6rphwa1vAFG').subscribe(res=>{this.resp = res});
     console.log(this.resp);
    //console.log( this.postsService.login('kvora2@spdemo5.demo.kv','Khyati@Vora18sIESue8gUzh9E6rphwa1vAFG') );
     
   }
}
interface home {
    id : string;
    name : string;
}

