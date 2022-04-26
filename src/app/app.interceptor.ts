import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SessionService } from './session.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
    private sessionService: SessionService,
    private snackbarService: MatSnackBar,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwtToken = this.sessionService.getAuthorizationToken();

    if (jwtToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwtToken.accessToken}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && error.url?.indexOf('auth/login') === -1) {
          this.sessionService.logout();
          this.snackbarService.open("http error"), undefined, {
            panelClass: 'error-snack',
            duration: 2500
          };
        }
        return throwError(error);
      })
    );
  }
}
