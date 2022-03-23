import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './app-login-page.component.html',
  styleUrls: ['./app-login-page.component.css']
})
export class AppLoginPageComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private snackbarService: MatSnackBar,
  ) { }

  ngOnInit(): void {
    console.log('comes heres')
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
