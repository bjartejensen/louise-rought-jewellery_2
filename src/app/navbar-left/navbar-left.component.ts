import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {

  showMenu: boolean;

  constructor() {
    this.showMenu = false;
  }

  onShowMenu($event) {
    console.log("clicked");
    this.showMenu = !this.showMenu;
  }

  ngOnInit() {
  }

}
