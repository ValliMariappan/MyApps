import { Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './component/localstorage.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './component/app.component.html',
  styleUrls: ['./component/app.component.css'],
  providers :[LocalStorageService]
})
export class AppComponent {
 
showLogin : Boolean;

constructor(private route : Router,private localstr : LocalStorageService ){
this.showLogin = false;
}

toggleLogin (){
 var token =  this.localstr.getItem('accessToken');
 console.log(this.showLogin);
if(!token && this.showLogin == true){
  debugger;
  this.showLogin = !(this.showLogin);
  let link =['login'];
  this.route.navigate(link);
}
else if(token || !token && this.showLogin == false ){
  debugger;
this.localstr.removeItem('accessToken');
this.showLogin = !(this.showLogin);
let link =['logout'];
  this.route.navigate(link);
}

  
 
  

}
  
}
