import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        NopagesfoundComponent
    ],
    providers: [],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagesModule,
        SharedModule
    ]
})
export class AppModule { }
