import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppChangeusernamePageComponent } from './app-changeusername-page/app-changeusername-page.component';
import { AppHomePageComponent } from './app-home-page/app-home-page.component';
import { AppLoginPageComponent } from './app-login-page/app-login-page.component';
import { AppRegisterPageComponent } from './app-register-page/app-register-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: AppHomePageComponent, canActivate: [AuthGuard] },
  { path: 'register', component: AppRegisterPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AppLoginPageComponent, canActivate: [AuthGuard] },
  { path: 'changeusername', component: AppChangeusernamePageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
