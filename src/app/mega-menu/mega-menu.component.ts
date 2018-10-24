import { Component,Output, Inject  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Directive, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit, EventEmitter, HostListener, Input, Renderer, Renderer2, OnChanges, OnInit } from '@angular/core';

import anime from 'animejs';

 @Directive({
  selector: '[appMegaMenu2]'
})


export class cdMegaMenu2 implements AfterViewInit, OnInit {

  showMegaMenu :boolean;

    constructor(private el: ElementRef, private renderer: Renderer, private renderer2: Renderer2, private router: Router, private activatedRoute: ActivatedRoute){ }

    ngOnInit(){
      
      console.log("ani kicks in");
    }

    ngAfterViewInit() {

      var animate1 = anime({targets: 'div.menu' ,
        height: '50vh',
        easing: 'easeInOutQuart',
        delay: 1000
       
      }); 
      
      animate1.play();

      var animate = anime({
        targets: 'div.menu a',
        opacity: [
          { value: 0, duration: 0 },
          { value: 1, duration: 700 }
        ],
              
        delay: function(el, i, l) {
          return i * 100+300+1000;
        }
      }); 
      
      animate.play();
    
    }

    @HostListener('click', ['$event']) onclick(event) {

    debugger;
     this.showMegaMenu = !this.showMegaMenu;
    
    }

    @HostListener('mouseover') onmouseover(event){

      let e = this.el.nativeElement;
    //  debugger;
    }

    onmouseover2(event){
      debugger;
    }

}


@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})
export class MegaMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
