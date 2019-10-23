import {Component, Input, OnInit} from '@angular/core';
import {MatMenuPanel, MatMenuTrigger} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onHomePage(): boolean {
    return this.router.url === '/dashboard';
  }
}
