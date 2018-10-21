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
    this.galleryImages.push(imgPath + "Louise_portrait"+".jpg" );
    this.galleryImages.push(imgPath + "v_4.jpeg");
    this.galleryImages.push(imgPath + "v_3.jpeg");
  }

}
