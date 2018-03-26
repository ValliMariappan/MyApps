
import {Injectable, OnInit} from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {AuthToken} from './auth-token';
import { HttpClientModule } from '@angular/common/http';

import {AuthHttpService} from './auth-http.service';



import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService implements OnInit {



	private CLIENT_ID = '3MVG9FS3IyroMOh5Oc_W3mUeqNjR0hZvIHkZr.TkWQnAHbUL0sR1NuFy5RnrTyR07B0DQ9CK6.cEZ8EltifTe';
    private CLIENT_SECRET = '6516230232174280544';
    private username='kvora2@spdemo5.demo.kv';
    private password ='Khyati@Vora18sIESue8gUzh9E6rphwa1vAFG';
    private tokenresponse :  any;

	constructor(
		private _http: Http,
		private _authHttpService: AuthHttpService
	
		) {
	
	}

	ngOnInit() {

    }
    
  

	login(userName: string, password: string) {
		return this._http.post("https://test.salesforce.com/services/oauth2/token",
			this.oAuth2RequestBody(userName, password),
			this.oAuthRequestOptions(userName, password)
        ).map((resp) => resp.json());	
        
			
           
	}

	oAuth2RequestBody(userName: string, password: string): string {
		let body = `username=userName`
			+ `&password=password`
			+ `&grant_type=password`
			+ `&scope=read%20write`
			+ `&client_id=${this.CLIENT_ID}`
			+ `&client_secret=${this.CLIENT_SECRET}`;

		return body;
	}

	oAuthRequestOptions(userName: string, password: string) {
		let headers = new Headers();

		this.headersAcceptJson(headers);
		this.headersContentType(headers);
		this.headersBasicAuthorization(headers, userName, password);

		let options = new RequestOptions({ headers: headers });

		return options;
	}

	headersContentType(headers: Headers) { 
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow_origin','*');
	}

	headersBasicAuthorization(headers: Headers, userName: string, password: string) {
		headers.append('Authorization', 'Basic ' + btoa(this.CLIENT_ID + ':' + this.CLIENT_SECRET));
	}

	headersAcceptJson(headers: Headers) {
        headers.append('Accept', 'application/json');
      // headers.append( 'Access-Control-Request-Method', 'POST');
	}	

}
