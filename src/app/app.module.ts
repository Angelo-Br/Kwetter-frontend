import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLoginPageComponent } from './app-login-page/app-login-page.component';
import { AppInterceptor } from './app.interceptor';
import { AppRegisterPageComponent } from './app-register-page/app-register-page.component';
import { AppHomePageComponent } from './app-home-page/app-home-page.component';
import { AppChangeusernamePageComponent } from './app-changeusername-page/app-changeusername-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginPageComponent,
    AppRegisterPageComponent,
    AppHomePageComponent,
    AppChangeusernamePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
