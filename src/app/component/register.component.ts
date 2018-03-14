import { Component } from '@angular/core';
import { Injectable } from '@angular/core'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl : './register.component.html'
 , styleUrls: ['./app.component.css']
})

@Injectable()
export class RegisterComponent {
  firstName : string;
  lastName : string;
  dob : Date;
  email : string;
  phone : number;
  password : string;
  gender : string;


 getDetails(f : NgForm): any {
   console.log(f.value);
  return f.value;
}

}

