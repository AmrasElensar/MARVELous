import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatMenu, MatMenuPanel, MatMenuTrigger} from '@angular/material';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navMenu: MatMenu;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit() {
  }

  showMessage = () => {
    this.messageEvent.emit('You just clicked the menu...');
  }
}
