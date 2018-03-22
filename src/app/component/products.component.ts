import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'products',
  templateUrl : './product.component.html',
   styleUrls: ['./app.component.css'],
   providers : [PostService]
})
export class ProductsComponent {
  posts : Posts[];

  constructor (private postsService : PostService){
    this.postsService.getPosts().subscribe(posts =>{
        this.posts = posts;
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