import { Component } from '@angular/core';
import { PostService } from './services/post.service';


@Component({
    selector: 'Home',
    templateUrl: './home.component.html',
    providers : [PostService] 
       
})

export class HomeComponent {

    public response:string;


  constructor(private postsService : PostService) {
      
      this.postsService.postCallToSalesforce().subscribe(res=>
  this.response = res);
       console.log(this.response);
     
   }
}

