import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from '../pages/pages.component';

const routes:Routes = [
  //rutas protegidas
  {path: '',component: PagesComponent,},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  //{path:'', redirectTo:'/dashboard', pathMatch:'full'},
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthRoutingModule { }
