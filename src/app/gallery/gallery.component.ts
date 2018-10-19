import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  router: Router;
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

    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1189_cmp"+".jpg" );
    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1705_cmp"+".jpg");
    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1463_cmp"+".jpg");
    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1360_cmp"+".jpg");
    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1330_cmp"+".jpg");
    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1473_cmp"+".jpg");

  }


}
