
import {Injectable, OnInit} from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {AuthToken} from './auth-token';
import { HttpClientModule } from '@angular/common/http';

import {AuthHttpService} from './auth-http.service';
import { LocalStorageService } from './local-storage.service';




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
        private _authHttpService: AuthHttpService,
        private _localStorageService: LocalStorageService
	
		) {
	
	}

	ngOnInit() {

    }
    readAuthenticationFromStorage(): string {
		let user = this._localStorageService.getItem('logged_user');
		let access_token = this._localStorageService.getItem('access_token');

		if (user && access_token) {
			this._authHttpService.access_token = access_token;			
			return user;
		}
		return null;
	}

	storeAuthentication(authToken: AuthToken, userName: string) {
		this._localStorageService.setItem('access_token', authToken.access_token);
		this._localStorageService.setItem('logged_user', userName);

		this._authHttpService.access_token = authToken.access_token;
	}

    clearAuthentication() {
		this._localStorageService.removeItem('access_token');
		this._localStorageService.removeItem('logged_user');
		this._authHttpService.access_token = null;
	}

	handleLoginError(error: any) {

		let msg = 'Server Error';

		if (error.status === 400) {
			msg = "Wrong user or password";
		}

		msg = "Login failed : " + msg;

		return Observable.throw(msg);
	}
  

	login(userName: string, password: string) {
		return this._http.post("https://test.salesforce.com/services/oauth2/token/",
			this.oAuth2RequestBody(userName, password),
			this.oAuthRequestOptions(userName, password)
        ).map((resp) => resp.json()).subscribe(
            (resp)=>{
                console.log(resp);
                this.storeAuthentication(resp, userName);
                          //  this.fetchUserInfo(userName, onSuccess);
                          
            },
           
        );		
           
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
       //headers.append( 'Access-Control-Request-Method', 'POST');
	}	

}
