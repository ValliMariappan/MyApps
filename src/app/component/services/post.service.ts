import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpUrlEncodingCodec } from '@angular/common/http';

@Injectable()
export class PostService{
constructor(private http : Http){
console.log('post initialized')
}
getPosts(){

    return this.http.get('https://jsonplaceholder.typicode.com/photos').map(res => res.json());
}


postCallToSalesforce(){

   /* var force = require('nforce');

  var org = force.createConnection({
    clientId: '3MVG9FS3IyroMOh5Oc_W3mUeqNjR0hZvIHkZr.TkWQnAHbUL0sR1NuFy5RnrTyR07B0DQ9CK6.cEZ8EltifTe',
    clientSecret: '6516230232174280544',
    redirectUri: 'https://test.salesforce.com/services/oauth2/success',
    apiVersion: 'v42.0',  // optional, defaults to current salesforce API version
    environment: 'sandbox',  // optional, salesforce 'sandbox' or 'production', production default
    mode: 'single' // optional, 'single' or 'multi' user mode, multi default
  });
// multi user mode
var oauth;
org.authenticate({ username: 'kvora2@spdemo5.demo.kv', password: 'Khyati@Vora1'}, function(err, resp){
  // the oauth object was stored in the connection object
  if(!err) console.log('Cached Token: ' + org.oauth.access_token)
});
//console.log(oauth);
return org.oauth;
 /*
  let 
    loginURL ='https://creater-dev-ed.my.salesforce.com/services/oauth2/token',
    appId = '3MVG9ZL0ppGP5UrDWHnFtfeuvi4KRg.pKAAwFJWlUH22Q2OiEmxfEMOugL8Ptree2WFs7mQjVY6v3qYwn6om3',
    oauthCallbackURL =  'https://login.salesforce.com/services/oauth2/success',
    password = 'Vall1@devorgMHOpC13vJQa1WXDk60WVk6kEB',
    username = 'vallimariappan@sapient.com',
    clientsecret = '5891115970891767783';
 // let response =  response.addHeader("Access-Control-Allow-Origin", "*");
 let headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
headers.append('Access-Control-Allow-Origin','https://ang-material.herokuapp.com');
headers.append('Access-Control-Allow-Methods', 'POST');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('Access-Control-Allow-Headers','Content-Type, Content-Range, Content-Disposition, Content-Description');

let requestOptions = new RequestOptions({ headers: headers });
//grant_type=password&client_id=3MVG9ZL0ppGP5UrDWHnFtfeuvi4KRg.pKAAwFJWlUH22Q2OiEmxfEMOugL8Ptree2WFs7mQjVY6v3qYwn6om3&client_secret=5891115970891767783&username=vallimariappan@sapient.com&password=Vall1@devorgMHOpC13vJQa1WXDk60WVk6kEB
    let fullUrl = 'grant_type=password'+'&client_id='+appId+'&client_secret='+clientsecret+'&username='+username+'&password='+password;
    return this.http.post(loginURL,fullUrl,{ headers: headers }).map(res => res.json());
    
  debugger;*/

    let jsforce =require('jsforce');
    let conn = new jsforce.Connection({
  oauth2 : {
    // you can change loginUrl to connect to sandbox or prerelease env.
     loginUrl : 'https://test.salesforce.com',
    //clientId : '3MVG9ZL0ppGP5UrDWHnFtfeuvi4KRg.pKAAwFJWlUH22Q2OiEmxfEMOugL8Ptree2WFs7mQjVY6v3qYwn6om3',
    //clientSecret : '5891115970891767783',
    //redirectUri : 'https://login.salesforce.com/services/oauth2/success'
  }
});
conn.login('debprotim.seal@ihsmarkit.com.stage', '#welcome123qLMLl9pkdV1F4khnM8ex0PWr', function(err, userInfo) {
  if (err) { return console.error(err); }
  // Now you can get the access token and instance URL information.
  // Save them to establish connection next time.
  debugger;
  console.log(conn.accessToken);
  console.log(conn.instanceUrl);
  // logged in user property
  console.log("User ID: " + userInfo.id);
  console.log("Org ID: " + userInfo.organizationId);
  // ...
});
return conn.json();
}

//var oauth;
//return oauth;
}
