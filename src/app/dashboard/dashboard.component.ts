import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menuVisibility: boolean;

  images = [
    {src: '../../assets/images/caroussel-images/marvel-comics-1.jpg'},
    {src: '../../assets/images/caroussel-images/marvel-comics-2.jpg'},
    {src: '../../assets/images/caroussel-images/marvel-comics-3.jpg'},
    {src: '../../assets/images/caroussel-images/marvel-comics-4.jpg'},
    {src: '../../assets/images/caroussel-images/marvel-comics-5.jpg'},
    {src: '../../assets/images/caroussel-images/marvel-comics-6.jpg'},
    {src: '../../assets/images/caroussel-images/marvel-comics-7.jpg'},
  ];

  constructor() {
    this.menuVisibility = false;
  }

  ngOnInit() {

  }

  toggleMenuVisibility = () => {
    this.menuVisibility = !this.menuVisibility;
  };

}
