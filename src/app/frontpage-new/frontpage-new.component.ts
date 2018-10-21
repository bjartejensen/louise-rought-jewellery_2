import { Component } from '@angular/core';
import { Directive, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit, EventEmitter, HostListener, Input, Renderer, Renderer2, OnChanges, OnInit } from '@angular/core';

import anime from 'animejs';

 @Directive({
  selector: '[appFpSectionOuttro]'
})

export class cdFpSectionOuttro implements AfterViewInit, OnInit {

  showMegaMenu :boolean;

    constructor(){
      
     }

    ngOnInit(){
      
    }

    ngAfterViewInit() {
    
    }

    @HostListener('click', ['$event']) onclick(event) {


      //debugger;

      /* var animate = anime({
        targets: 'div.in-dept-image-section',
        translateX: 250,
        easing: 'easeInOutQuart',        
        delay: 200
      }); 
      animate.play(); */
    
    }

}


@Component({
  selector: 'app-frontpage-new',
  templateUrl: './frontpage-new.component.html',
  styleUrls: ['./frontpage-new.component.scss']
})
export class FrontpageNewComponent implements OnInit {
  galleryImages: Array<string>;
 

  constructor() {
    this.setImageArray();
   }

  ngOnInit() {}

  ngAfterViewInit(){
    
  }

  setImageArray(){

    this.galleryImages = new Array<string>();

    let imgPath= "../../assets/img/Compressed/";

    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1189_cmp"+".jpg");
    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1705_cmp"+".jpg");
    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1463_cmp"+".jpg");
    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1360_cmp"+".jpg");
    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1330_cmp"+".jpg");
    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1473_cmp"+".jpg");

  }
}
