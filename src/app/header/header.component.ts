import {Component, Input, OnInit} from '@angular/core';
import {MatMenuPanel, MatMenuTrigger} from '@angular/material';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser = null;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  isLoggedIn = () => {
    this.userService.getCurrentUser().then(user => this.currentUser = user);
    return this.currentUser !== null;
  };

  onHomePage(): boolean {
    return this.router.url === '/dashboard';
  }
}
