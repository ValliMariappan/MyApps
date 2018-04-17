import {ModuleWithProviders, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register.component';
import { ProductsComponent } from './component/products.component';
import { HomeComponent } from './component/home.component';
import { LoginComponent } from './component/login.component';
import { PostService } from './component/post.service';
import { LogoutComponent } from './component/logout.component';



const appRoutes: Routes =[
  
{
    path : 'register',
    component : RegisterComponent
},
{
    path : 'products',
    component : ProductsComponent
},
{
    path : 'home',
    component : HomeComponent
},
{
    path: 'login',
    component : LoginComponent
},
{
    path : 'post',
    component : PostService
},
{
    path : 'logout',
    component : LogoutComponent
}



];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);