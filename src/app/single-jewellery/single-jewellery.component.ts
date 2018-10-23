import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import anime from 'animejs';

export class GalleryItem {
  
  constructor(  
          public id: string,
          public name: string, 
          public description: string,
          public mainImageId: number,
          public prevUrl: string,
          public nextUrl: string,
          public packshotIdArray:Array<string> ) {
  }
}

@Component({
  selector: 'app-single-jewellery',
  templateUrl: './single-jewellery.component.html',
  styleUrls: ['./single-jewellery.component.scss']
})
export class SingleJewelleryComponent implements OnInit, AfterViewInit {

  singleJewelleryId: string;
  galleryItems: GalleryItem[];
  selectedGalleryItem: GalleryItem;
  backgroundImageUrl:string;
  prevUrl: string;
  nextUrl: string;
  images: any;

  animateIntro1:any;
  animateIntro2:any;
  animateIntro3:any;

  constructor(private route: ActivatedRoute) {}
  

  ngAfterViewInit(){

    this.animateIntrofunc();

  }

  animateIntrofunc(){

    this.animateIntro1 = anime({
      targets: 'div.in-dept-text-section',
      /* opacity: [
        { value: 1, duration: 0 },
        { value: 0, duration: 800 }
      ],   */
      width: '85vw',
           
      easing: 'easeInOutQuad',
      duration: 600,
      delay: 400,
    }); 

    this.animateIntro2 = anime({
      targets: 'div.in-dept-img-wrapper',
       opacity: [
        { value: 0, duration: 0 },
        { value: 1, duration: 800 }
      ],  
      easing: 'easeInOutQuad',
      duration: 300,
      delay: 1000,
    }); 

    this.animateIntro2 = anime({
      targets: 'div.border',
       opacity: 0,
      easing: 'easeInOutQuad',
      duration: 300,
      delay: 3000,
    }); 
    

    this.animateIntro1.play();
    this.animateIntro2.play();
    this.animateIntro3.play();

  }

  ngOnInit() {

   

    this.setSingleJewelleryItems();

    this.route.paramMap
      .subscribe(params=>{
          //debugger;
          let id = params.get("id");
          this.singleJewelleryId = id.toString();
          this.setSelectedSingleJewelleryComponent();
          this.backgroundImageUrl = this.getJewelleryImageUrl(this.selectedGalleryItem.mainImageId);
         /*  this.prevUrl = this.getUrl(this.selectedGalleryItem.prevUrl);
          console.log("prev url:" + this.prevUrl);
          this.nextUrl = this.getUrl(this.selectedGalleryItem.nextUrl);
          console.log("next url:" + this.nextUrl); */

      })
  }

  setSingleJewelleryItems(){

    ['/metals']

    this.galleryItems = new Array<GalleryItem>();
    let gi = new GalleryItem("j1","Fresh Water Drop","14 carat gold ~ fresh water pearl ~ natural unheated sapphire",1189,"","j2",null);
    this.galleryItems.push(gi);

    gi = new GalleryItem("j2","Pearl necklesses","silver chains with tahiti pearls ~ fresh water pearls ~ sappire",1705,"j1","j3",null);
    this.galleryItems.push(gi);

    gi = new GalleryItem("j3","BIG Oops","goldplated silver ~ fresh water pearl",1463,"j2","j4",null);
    this.galleryItems.push(gi);

    gi = new GalleryItem("j4","Tahiti Love","facetted tahiti pearl ~ 14 carat",1360,"j3","j5",null);
    this.galleryItems.push(gi);

    gi = new GalleryItem("j5","Tahiti Stick","14 carat ~ half cut tahiti pearl ~ fresh water pearl",1330,"j4","j6",null);
    this.galleryItems.push(gi);

    gi = new GalleryItem("j6","The Stones","gold platted silver ~ fresh water pearl",1473,"j5","",null);
    this.galleryItems.push(gi);

  }

  setSelectedSingleJewelleryComponent(){
    //debugger;
    this.selectedGalleryItem =  this.galleryItems.find(x => x.id == this.singleJewelleryId);
  }
  
  getUrl(subPageId:string){
    let t = subPageId;//"['/', gallery, 'j2']"; //"['/', 'gallery', '" + subPageId  + "']"
    return t;
  }

  getJewelleryImageUrl(imageId: number): string{

    let t ="../../assets/img/Compressed/180826_LOUISE_ROUGHT" + imageId.toString() +"_cmp.jpg";

    return t;

  }


}
