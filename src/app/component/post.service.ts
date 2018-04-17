import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpUrlEncodingCodec, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './localstorage.component';
import 'rxjs/add/operator/toPromise';
import { promise } from 'protractor';

@Component({
  selector : 'post',
  templateUrl : './postService.component.html',
 providers : [LocalStorageService]
})



@Injectable()
export class PostService{
  users : users[];

  authToken1 : string;

constructor(private http : Http, private router : Router, private localstore : LocalStorageService){ 

console.log('post initialized')
let searchParam = new URLSearchParams(window.location.hash.substr(1)); 
let authToken;
authToken= searchParam.get('access_token');
//instance_url = searchParam.get('instance_url');
//let issued_at = searchParam.get('issued_at');  
this.authToken1 = authToken;
if(this.authToken1 !=null){
 
  this.localstore.setItem('accessToken',this.authToken1);

}
console.log(this.authToken1);
console.log(authToken);
//let link = ['home'];
//this.router.navigate(link);

}
getPosts(){
  
    return this.http.get('https://jsonplaceholder.typicode.com/photos').map(res => res.json());
}
getUsers(){
  window.location.replace("https://test.salesforce.com/services/oauth2/authorize?response_type=token&client_id=3MVG97wqanbUM37IVoLgN9yIxE.59yeUnBjEVgMN16J.Zw21ZnKa01pCWIC_K2IMvn6UCiUVJlg9WQEwF6lpW&redirect_uri=http://localhost:4200/post&state=mystate");
 
}

getDataFromSalesforce(access_token): Promise<any>{
 
  var method ='GET';
  var headerOpts;
  var data ='';
  const headers = new Headers();
  var  baseUrl = 'https://spdemo6--dev3.cs66.my.salesforce.com';
  var path = '/services/data/v39.0/query/?q=SELECT Id,firstName__c,lastName__c,email__c,phone__c FROM User_Details__c';
  headers.append('Authorization', 'Bearer '+access_token );
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Content-Type', headerOpts ? headerOpts['Content-Type'] || 'application/json' : 'application/json');
  let options = Object.assign({}, { method, headers }, data ? { body: JSON.stringify(data) } : {});
  debugger;
  return this.http.get(baseUrl + path, options).map(response => {
      this.users = response.json().records; 
   return this.users;
  }).toPromise().catch(this.handleError);
}


createUser(val,token): Promise<any>{
 
console.log(val);
  var method ='POST';
  var headerOpts;
  var data ='';
  const headers = new Headers();
  var  baseUrl = 'https://spdemo6--dev3.cs66.my.salesforce.com';
  var path = '/services/data/v20.0/sobjects/User_Details__c/';
  headers.append('Authorization', 'Bearer '+token );
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Content-Type', headerOpts ? headerOpts['Content-Type'] || 'application/json' : 'application/json');
  let options = Object.assign({}, { method, headers }, data ? { body: JSON.stringify(data) } : {});
 return this.http.post(baseUrl + path, val,options).map(response => {
   response.json()   
  }).toPromise().catch(this.handleError);
}
handleError(error : Response)
{
console.log(error);
}



deleteUser(Id,token): Promise<any>{
  
    debugger;
    var headerOpts;
    var method ='DELETE';
    var data ='';
    const headers = new Headers();
    var  baseUrl = 'https://spdemo6--dev3.cs66.my.salesforce.com';
    var path = '/services/data/v20.0/sobjects/User_Details__c/'+Id;
    headers.append('Authorization', 'Bearer '+token );
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', headerOpts ? headerOpts['Content-Type'] || 'application/json' : 'application/json');
    let options = Object.assign({}, { method, headers }, data ? { body: JSON.stringify(data) } : {});
 return this.http.delete(baseUrl + path,options).map(resp=>{
   return resp;
 }).toPromise().catch(this.handleError); 
}


}
interface users {
  Id : string;
  FirstName : string;
  LastName : string;
  Email : string;
  Phone : string;
}
 



