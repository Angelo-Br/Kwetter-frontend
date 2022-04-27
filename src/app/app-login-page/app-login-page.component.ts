import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ILoginRequest } from '../models/login.model';
import { IUser } from '../models/user.model';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './app-login-page.component.html',
  styleUrls: ['./app-login-page.component.css']
})
export class AppLoginPageComponent implements OnInit {
  isLoading = false;
  testUser: IUser = {} as IUser;
  public loginRequest: ILoginRequest;
  public error = '';

  constructor(
    private router: Router,
    private apiService: ApiService,
    private notificationService: MatSnackBar,
    public dialog: MatDialog,
    private sessionService: SessionService
  ) {
    this.loginRequest = { username: null, password: null };
  }

  ngOnInit(): void {
    //this.fireRabbitMQCall();ss
  }

  onLogin(): void {
    if (this.loginRequest.username.trim() === '') {
      this.showErrorNotification('LOGIN.NO_USERNAME');
      return;
    }

    if (this.loginRequest.password.trim() === '') {
      this.showErrorNotification('LOGIN.NO_PASSWORD');
      return;
    }

    this.isLoading = true;

    this.apiService.loginUser(this.loginRequest).subscribe({
      next: (resp) => {
        this.notificationService.open("Succesfully logged in"), null, {
          panelClass: 'succes-snack',
          duration: 2500
        };

        this.sessionService.setCurrentUser({
          accessToken: resp.body as string,
          roles: []
        });

        this.router.navigate(['home']);
      },
      error: (err) => {
        this.showErrorNotification(err.error);
      }
    });
  }


  public getTestUser() {
    this.apiService.getTestUser().subscribe({
      next: (resp) => {
        this.testUser = resp.body;
      },
      error: (err) => {
        this.showErrorNotification('Error');
      }
    });
  }

  private fireRabbitMQCall(): void {
    this.apiService.getAllUsers().subscribe({
      next: (resp) => {
        console.log('comes in here resp')
        console.log(resp.body)
      },
      error: (err) => {
        this.showErrorNotification('Error');
      }
    });
  }

  /*
    Show error notification
  */
    private showErrorNotification(message: string): void {
      this.notificationService.open(message, undefined, {
        panelClass: 'error-snack',
        duration: 8500
      });
    }

}
