import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpUrlEncodingCodec, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
////import oauth  from '../../../../server.js';



 /*export interface Home{
   id : string;
   name : string;
 }*/
 


@Injectable()
export class PostService{

constructor(private http : Http){ 
console.log('post initialized')
}

getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos').map(res => res.json());
}

/*getAccount() : Observable<Home[]>{
  debugger;
  return this.http.get<Home[]>('../../home').map(res=>res);
}
*/


}


