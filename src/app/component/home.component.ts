import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import {ContactDetailComponent} from './contactDetail.component';

@Component({
    selector: 'Home',
    templateUrl: './home.component.html',
    providers : [PostService] 
       
})

export class HomeComponent {

    public response:string;


 // constructor(private postsService : PostService) {
      
   //    this.postsService.postCallToSalesforce();
       
      //console.log(this.response);
  // }
}

