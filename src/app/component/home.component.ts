import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers : [PostService] 
       
})

export class HomeComponent {

   public Home : home[];
    public resp : any;
 /*

  constructor(private postsService : PostService) {
      debugger;
     this.postsService.getAccount().subscribe(res=>
 this.resp = res);
      console.log( this.postsService.getAccount());
     
   }*/
}
interface home {
    id : string;
    name : string;
}

