import { Component } from '@angular/core';
import { PostService } from './services/post.service';


@Component({
    selector: 'Home',
    templateUrl: './home.component.html',
    providers : [PostService] 
       
})

export class HomeComponent {

    public response:any;


  constructor(private postsService : PostService) {
      
    debugger;
      this.postsService.postCallToSalesforce();
     
   }
}

