import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes:Routes = [
  //rutas protegidas
  {path: '',component: PagesComponent,},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  //{path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component: NopagesfoundComponent},
  ];

  @NgModule({
    declarations: [],
    imports: [
    SharedModule,
    PagesRoutingModule,
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    ],
    exports:[RouterModule]
    })
    export class AppRoutingModule { }
