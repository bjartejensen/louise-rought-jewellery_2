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
      
     }

    ngOnInit(){
      
    }

    ngAfterViewInit() {

      var animate = anime({
        targets: 'div.menu a',
        opacity: [
          { value: 0, duration: 0 },
          { value: 1, duration: 700 }
        ],
              
        delay: function(el, i, l) {
          return i * 100+300;
        }
      }); 
      animate.play();
    }

    @HostListener('click', ['$event']) onclick(event) {

    //debugger;
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

  constructor(){
    this.showMegaMenu = false;
  }

  toggleMegaMenu(){
    //debugger;
    this.showMegaMenu =!this.showMegaMenu;
  }

}
