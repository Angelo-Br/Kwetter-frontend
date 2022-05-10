import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './app-home-page.component.html',
  styleUrls: ['./app-home-page.component.css']
})
export class AppHomePageComponent implements OnInit {

  constructor(
    private router: Router,
    private apiService: ApiService,
    private notificationService: MatSnackBar,
    public dialog: MatDialog,
    private sessionService: SessionService
  ) {
    
  }

  ngOnInit(): void {
  }


  onLogin(): void {

    this.apiService.getTestUser().subscribe({
      next: (resp) => {
        this.notificationService.open(resp.body.token), null, {
          panelClass: 'succes-snack',
          duration: 2500
        };
        console.log(resp.body);
      },
      error: (err) => {
        this.showErrorNotification(err.error);
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
