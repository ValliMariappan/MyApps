import { Component } from '@angular/core';
import { PostService } from './post.service';
import { LocalStorageService } from './localstorage.component';

@Component({
  selector: 'products',
  templateUrl : './product.component.html',
   styleUrls: ['./app.component.css'],
   providers : [PostService,LocalStorageService]
})
export class ProductsComponent {
  posts : Posts[];

  constructor (private postsService : PostService){
    this.postsService.getPosts().subscribe(res =>{
        this.posts = res;
    }); 
  // console.log(this.posts);
  }
}
interface Posts{
    id : number;
    title : string;
    url : string;
    thumbnailUrl : string;
}