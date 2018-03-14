import {ModuleWithProviders, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register.component';
import { ProductsComponent } from './component/products.component';
import { HomeComponent } from './component/home.component';
import { ContactDetailComponent } from './component/contactDetail.component';


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
    path : 'contactdetail',
    component : ContactDetailComponent
}

];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);