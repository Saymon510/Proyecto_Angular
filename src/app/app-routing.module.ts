import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes:Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component: NopagesfoundComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
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
