import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-pearls',
  templateUrl: './pearls.component.html',
  styleUrls: ['./pearls.component.scss']
})
export class PearlsComponent implements OnInit {

  galleryImages: Array<string>;

  constructor(private router: Router) { 
    this.setImageArray();
  }

  ngOnInit() {

/*     this.router.events.filter(event => event instanceof NavigationEnd).subscribe(() => {
      this.window.scrollTo(0, 0);
}); */

  }

  setImageArray(){
    
    this.galleryImages = new Array<string>();

    let imgPath= "../../assets/img/Compressed/";
    this.galleryImages.push(imgPath + "180826_LOUISE_ROUGHT1189_cmp"+".jpg" );
    this.galleryImages.push(imgPath + "v_4.jpg");
  }

}
