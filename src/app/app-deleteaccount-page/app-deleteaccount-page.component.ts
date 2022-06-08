import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';
import { IDeleteAccount } from '../models/delete-account.model';

@Component({
  selector: 'app-deleteaccount-page',
  templateUrl: './app-deleteaccount-page.component.html',
  styleUrls: ['./app-deleteaccount-page.component.css']
})
export class AppDeleteaccountPageComponent implements OnInit {
  public deleteRequest: IDeleteAccount;

  constructor(
    private apiService: ApiService,
    private notificationService: MatSnackBar,
    public dialog: MatDialog,
  ) { 
    this.deleteRequest = { password: null };
  }

  ngOnInit(): void {
  }
  
  onDeleteAccount(): void {
    this.apiService.deleteAccount(this.deleteRequest).subscribe({
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
  }

  private showErrorNotification(message: string): void {
    this.notificationService.open(message, undefined, {
      panelClass: 'error-snack',
      duration: 8500
    });
  }
}
