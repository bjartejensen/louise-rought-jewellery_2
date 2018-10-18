import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaerkstedet',
  templateUrl: './vaerkstedet.component.html',
  styleUrls: ['./vaerkstedet.component.scss']
})
export class VaerkstedetComponent implements OnInit {

  galleryImages: Array<string>;

  constructor() { 
    this.setImageArray();
  }

  ngOnInit() {
  }

  
  setImageArray(){

  this.galleryImages = new Array<string>();

  let imgPath= "../../assets/img/Compressed/";
  this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1189_cmp"+".jpg" );
  this.galleryImages.push(imgPath + "logo.png");

  }

}
