import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
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

  getTestUser(): Observable<HttpResponse<IUser>> {
    return this.http.get<IUser>(`${this.API_GATEWAY}testuser`, { observe: 'response' });
  }

  /* POST calls */
  registerUser(user: IRegister): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.API_GATEWAY}user`, user, { observe: 'response' });
  }

  loginUser(request: ILoginRequest): Observable<HttpResponse<string>> {
    return this.http.post<string>(`${this.API_GATEWAY}auth/login`, request, { observe: 'response' });
  }

}
