import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sustanability',
  templateUrl: './sustanability.component.html',
  styleUrls: ['./sustanability.component.scss']
})
export class SustanabilityComponent implements OnInit {
  galleryImages: Array<string>;

  constructor() { 
    
    this.setImageArray();
  }

  ngOnInit() {
  }
  
  setImageArray(){

    
  this.galleryImages = new Array<string>();

  let imgPath= "../../assets/img/Compressed/";
  this.galleryImages.push(imgPath + "sust_3.jpeg" );
 /*  this.galleryImages.push(imgPath + "v_3.jpeg");
  this.galleryImages.push(imgPath + "v_2.jpeg"); */
  }
}
