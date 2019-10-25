import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MARVELous';

  constructor(private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {
  };

  logout = () => {
    this.authService.doLogout()
      .then((res) => {
      this.router.navigateByUrl('login');
    }, (error) => {
      console.log('Logout error', error);
    });
  };

  printMessage = (event) => {
    this.snackBar.open(event, 'Close', {
      duration: 3500,
    });
  };
}
