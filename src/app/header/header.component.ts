import {Component, Input, OnInit} from '@angular/core';
import {MatMenuPanel, MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navMenu: MatMenuPanel;

  constructor() {
  }

  ngOnInit() {
  }
}
