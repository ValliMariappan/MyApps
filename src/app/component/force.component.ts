/**
 * ForceJS - REST toolkit for Salesforce.com
 * Author: Christophe Coenraets @ccoenraets
 * Version: 0.7.2
 */
"use strict";

let window:any = this.window;

let 
    loginURL = 'https://login.salesforce.com/services/oauth2/token',
    appId = '3MVG9ZL0ppGP5UrDWHnFtfeuvi4KRg.pKAAwFJWlUH22Q2OiEmxfEMOugL8Ptree2WFs7mQjVY6v3qYwn6om3',
    oauthCallbackURL =  'https://login.salesforce.com/services/oauth2/success',
    password = 'Vall1@devorg',
    username = 'vallimariappan@sapient.com',
    clientsecret = '5891115970891767783';

export let login = () => new Promise((resolve, reject) => {

    console.log('loginURL: ' + loginURL);
    console.log('oauthCallbackURL: ' + oauthCallbackURL);
    
    let loginWindowURL = 'grant_type='+password+'&client_id='+appId+'&client_secret='+clientsecret+'&username='+username+'&password='+password;
    console.log(loginWindowURL);
    document.addEventListener("oauthCallback", (evt) => {
    
        let event:any = evt;
        // Parse the OAuth data received from Salesforce
        let url = event.detail,
        queryString,
        obj;
        console.log(url);
    
    });

    
    //var newwindow = window.open(loginWindowURL);
    
    }); 





