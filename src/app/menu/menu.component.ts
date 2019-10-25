import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public authService: AuthService,
              public router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.doLogout()
      .then((res) => {
        this.router.navigateByUrl('login');
      }, (error) => {
        console.log('Logout error', error);
      });
  }
}
