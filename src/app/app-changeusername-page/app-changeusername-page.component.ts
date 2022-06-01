import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { IChangeUsername } from '../models/change-username.model';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-changeusername-page',
  templateUrl: './app-changeusername-page.component.html',
  styleUrls: ['./app-changeusername-page.component.css']
})
export class AppChangeusernamePageComponent implements OnInit {

  public changeUsernameRequest: IChangeUsername;
  public isLoading = false;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private notificationService: MatSnackBar,
    public dialog: MatDialog,
    private sessionService: SessionService
  ) {
    this.changeUsernameRequest = { newUsername: null, password: null };
   }

  ngOnInit(): void {
  }

  onChangeUsername(): void {
    this.isLoading = true;
    if(this.changeUsernameRequest.newUsername === null || this.changeUsernameRequest.password === null){
      this.showErrorNotification("Fill in both fields");
    }
    this.apiService.changeUsername(this.changeUsernameRequest).subscribe({
      next: (resp) => {
        this.notificationService.open(resp.body), null, {
          panelClass: 'succes-snack',
          duration: 2500
        };
        console.log(resp.body);
      },
      error: (err) => {
        this.showErrorNotification(err.error);
      }
    });
    this.isLoading = false;
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
