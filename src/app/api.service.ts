import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { IChangeUsername } from './models/change-username.model';
import { ILoggedUser } from './models/logged-user.model';
import { ILoginRequest } from './models/login.model';
import { IRegister } from './models/register.model';
import { IUser } from './models/user.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_GATEWAY = environment.url;

  constructor(private http: HttpClient) { }

  /* GET calls */
  getAllUsers(): Observable<HttpResponse<Array<IUser>>> {
    return this.http.get<Array<IUser>>(`${this.API_GATEWAY}users`, { observe: 'response' });
  }

  getTestUser(): Observable<HttpResponse<ILoggedUser>> {
    return this.http.get<ILoggedUser>(`${this.API_GATEWAY}testuser`, { observe: 'response' });
  }

  getLoggedUser(): Observable<HttpResponse<string>> {
    return this.http.get<string>(`${this.API_GATEWAY}auth/loggeduser`, { observe: 'response' });
  }

  /* POST calls */
  registerUser(user: IRegister): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.API_GATEWAY}register`, user, { observe: 'response' });
  }

  loginUser(request: ILoginRequest): Observable<HttpResponse<string>> {
    return this.http.post<string>(`${this.API_GATEWAY}auth/login`, request, { observe: 'response' });
  }

  changeUsername(request: IChangeUsername): Observable<HttpResponse<string>> {
    return this.http.post<string>(`${this.API_GATEWAY}user/changeusername`, request, { observe: 'response' });
  }
}
