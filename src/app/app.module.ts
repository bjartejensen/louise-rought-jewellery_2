import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';


//import {NgsRevealModule} from 'ng-scrollreveal';
import {NgxPageScrollModule} from 'ngx-page-scroll';

import { AppComponent, cdMegaMenu } from './app.component';
import { AboutComponent } from './about/about.component';
import { VaerkstedetComponent } from './vaerkstedet/vaerkstedet.component';
import { PearlsComponent } from './pearls/pearls.component';
import { SapphiresComponent } from './sapphires/sapphires.component';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';
import { ContactComponent } from './contact/contact.component';
import { FindComponent } from './find/find.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SingleJewelleryComponent } from './single-jewellery/single-jewellery.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { MetalsComponent } from './metals/metals.component';

@NgModule({
  declarations: [
    AppComponent,
    cdMegaMenu,
    AboutComponent,
    VaerkstedetComponent,
    PearlsComponent,
    SapphiresComponent,
    NavbarLeftComponent,
    ContactComponent,
    FindComponent,
    GalleryComponent,
    SingleJewelleryComponent,
    FrontpageComponent,
    MetalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollModule
    //NgsRevealModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
