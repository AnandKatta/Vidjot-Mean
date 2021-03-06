import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule,ReactiveFormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { AddIdeaComponent } from './add-idea/add-idea.component';

import { HttpClientModule} from  '@angular/common/http';
import {VidjotService} from "./vidjot.service";
import { IdeaListComponent } from './idea-list/idea-list.component';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersService } from "./users.service"
@NgModule({
  declarations: [
    AppComponent,
    LandingComponentComponent,
    MenuComponent,
    AboutComponent,
    AddIdeaComponent,
    IdeaListComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [VidjotService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
