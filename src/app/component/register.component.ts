import { Component } from '@angular/core';
import { Injectable } from '@angular/core'; 
import { NgForm } from '@angular/forms';
import { PostService } from './post.service';
import { LocalStorageService } from './localstorage.component';
import { EmailValidator } from '@angular/forms';


@Component({
selector: 'register',
templateUrl : './register.component.html',
styleUrls: ['./app.component.css'],
providers : [PostService,LocalStorageService]
})


export class RegisterComponent {
  firstName__c : string;
  lastName__c : string;
  email__c : string;
  phone__c : number;
  password__c : string;


constructor (private postservice : PostService, private localstore : LocalStorageService){

}

 getDetails(f : NgForm) {
   debugger;
 let status ;
let accessToken = this.localstore.getItem('accessToken');
console.log(accessToken);
  if(f.value){
    this.postservice.createUser(f.value,accessToken).then((result)=>{
      console.log('result inside resgister'+result);
    status = result;
      window.location.reload();
    });


  /*  this.postservice.createUser(f.value,accessToken).subscribe(res =>{
console.log(res);
if(res.success == true){


}

    });*/

  }

}
handleCancel(){

  window.location.reload();
}

}

