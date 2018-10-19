import { Component,Output, Inject  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Directive, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit, EventEmitter, HostListener, Input, Renderer, Renderer2, OnChanges, OnInit } from '@angular/core';

import anime from 'animejs';

 @Directive({
  selector: '[appMegaMenu]'
})

export class cdMegaMenu implements AfterViewInit, OnInit {

  showMegaMenu :boolean;

    constructor(){
      console.log("Så kom vi så langt");
     }

    ngOnInit(){
      console.log("Så kom vi så langt");
    }

    ngAfterViewInit(){}

    @HostListener('click', ['$event']) onclick(event) {

    debugger;
     this.showMegaMenu = !this.showMegaMenu;
    
    }





}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'louise-rought-jewellery';

  showMegaMenu: boolean;

  constructor(){}

  toggleMegaMenu(){
    debugger;
    this.showMegaMenu =!this.showMegaMenu;
  }

}
