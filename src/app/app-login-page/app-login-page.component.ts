import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './app-login-page.component.html',
  styleUrls: ['./app-login-page.component.css']
})
export class AppLoginPageComponent implements OnInit {

  testUser: IUser = {} as IUser;

  constructor(
    private apiService: ApiService,
    private snackbarService: MatSnackBar,
  ) {

  }

  ngOnInit(): void {
    //this.fireRabbitMQCall();ss
    
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
    private showErrorNotification(translateableMessage: string): void {
      this.snackbarService.open("error", undefined, {
        panelClass: 'error-snack',
        duration: 2500
      });
    }

}
