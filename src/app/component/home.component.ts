import { Component, Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Router } from '@angular/router';
import { LocalStorageService } from './localstorage.component';

@Component({
selector: 'home',
templateUrl: './home.component.html',
providers : [PostService,LocalStorageService]    
})


export class HomeComponent {
 
 users :any ;

 displayedColumns = ['fname', 'lname', 'email', 'phone','delete'];

constructor( private postService : PostService, private localstore :LocalStorageService  ){

     
        let access_token = this.localstore.getItem('accessToken');
        console.log('inside home component'+access_token);

        this.postService.getDataFromSalesforce(access_token).then((response) =>{
 
        this.users = response;
       
        console.log(  response);
     
    });
    

  
}
deleteRec(Id) {
 debugger;
        let access_token = this.localstore.getItem('accessToken');
        console.log(Id);
        this.postService.deleteUser(Id,access_token).then((result)=>{
debugger;
            console.log('result inside calling method   '+result);
window.location.reload();
        });
           
      

  
  
}
}



 



