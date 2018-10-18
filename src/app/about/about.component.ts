import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
    this.galleryImages.push(imgPath + "stones.jpg");
  }

}
