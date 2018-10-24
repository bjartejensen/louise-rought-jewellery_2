import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';

import {NgxPageScrollModule} from 'ngx-page-scroll';
import {NgsRevealModule} from 'ng-scrollreveal';

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
import { SustanabilityComponent } from './sustanability/sustanability.component';
import { FrontpageNewComponent,cdFpSectionOuttro } from './frontpage-new/frontpage-new.component';
import { GalleryNewComponent } from './gallery-new/gallery-new.component';
import { GalleryNew2Component } from './gallery-new2/gallery-new2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCard,MatCardHeader,MatCardTitle, MatCardSubtitle, MatCardContent,MatCardImage} from '@angular/material';
import { MegaMenuComponent,cdMegaMenu2 } from './mega-menu/mega-menu.component';

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
    MetalsComponent,
    SustanabilityComponent,
    FrontpageNewComponent,
    cdFpSectionOuttro,
    GalleryNewComponent,
    GalleryNew2Component,
    MegaMenuComponent,
    cdMegaMenu2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollModule,
    NgsRevealModule.forRoot(),
    BrowserAnimationsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
