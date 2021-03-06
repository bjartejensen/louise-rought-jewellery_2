import { Component, Output,Inject ,OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'
import { Directive, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit, EventEmitter, HostListener, Input, Renderer, Renderer2, OnChanges } from '@angular/core';
import anime from 'animejs';


@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  displayWord_1:string;
  displayWord_2:string;
  displayWord_3:string;

  displayLetters_1:Array<string>;
  displayLetters_2:Array<string>;
  displayLetters_3:Array<string>;

  galleryImages: Array<string>;

  constructor() {
    this.setImageArray();
  }

  ngOnInit() {

    //debugger;
    this.displayWord_1 = "Louise";
    this.displayWord_2 = "Rought";
    this.displayWord_3 = "Jewellery";

    this.displayLetters_1 = new Array<string>();
    this.displayLetters_2 = new Array<string>();
    this.displayLetters_3 = new Array<string>();

    this.displayLetters_1 = this.displayWord_1.split('');
    this.displayLetters_1.push(" ");
    this.displayLetters_2 = this.displayWord_2.split('');
    this.displayLetters_2.push(" ");
    this.displayLetters_3 = this.displayWord_3.split('');
    this.displayLetters_3.push(" ");
   }

  setImageArray(){

    this.galleryImages = new Array<string>();

    let imgPath= "../../assets/img/Compressed/";

    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1189_cmp"+".jpg" );
    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1705_cmp"+".jpg");
    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1463_cmp"+".jpg");
    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1360_cmp"+".jpg");
    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1330_cmp"+".jpg");
    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1358_cmp"+".jpg");


  }

}
