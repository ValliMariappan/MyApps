import { Component } from '@angular/core';
import { LoginService } from './services/Login.service';
import {AuthHttpService} from './services/auth-http.service';
import { LocalStorageService } from './services/local-storage.service';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers : [LoginService,AuthHttpService,LocalStorageService] 
       
})

export class HomeComponent {

   public Home : home[];
    public resp : any;
 

  constructor(private postsService : LoginService) {
      
     this.postsService.login('kvora2@spdemo5.demo.kv','Khyati@Vora1');
     console.log(this.resp);
    //console.log( this.postsService.login('kvora2@spdemo5.demo.kv','Khyati@Vora18sIESue8gUzh9E6rphwa1vAFG') );
     
   }
}
interface home {
    id : string;
    name : string;
}

