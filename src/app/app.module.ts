import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';

//import { NgsRevealModule } from 'ng-scrollreveal';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { VaerkstedetComponent } from './vaerkstedet/vaerkstedet.component';
import { PearlsComponent } from './pearls/pearls.component';
import { SapphiresComponent } from './sapphires/sapphires.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    VaerkstedetComponent,
    PearlsComponent,
    SapphiresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
