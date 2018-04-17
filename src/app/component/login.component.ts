import { Component } from '@angular/core';
import { PostService } from './post.service';
import {LocalStorageService } from './localstorage.component';


@Component({
selector: 'login',
templateUrl: './login.component.html',
providers : [PostService,LocalStorageService] 
 
    
})

export class LoginComponent {

    constructor(private postsService : PostService,private localstore :LocalStorageService ){

        this.postsService.getUsers();
       // window.location.replace("https://test.salesforce.com/services/oauth2/authorize?response_type=token&client_id=3MVG9FS3IyroMOh5Oc_W3mUeqNjR0hZvIHkZr.TkWQnAHbUL0sR1NuFy5RnrTyR07B0DQ9CK6.cEZ8EltifTe&redirect_uri=http://localhost:4200/post&state=mystate");
        
    }
}