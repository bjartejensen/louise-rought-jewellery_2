import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import { AboutComponent } from './about/about.component';
import {VaerkstedetComponent} from './vaerkstedet/vaerkstedet.component';
import { PearlsComponent } from './pearls/pearls.component';
import {SapphiresComponent} from './sapphires/sapphires.component';
import { FindComponent } from './find/find.component';
import { GalleryComponent } from './gallery/gallery.component';
import {FrontpageComponent} from './frontpage/frontpage.component';
import { FrontpageNewComponent } from './frontpage-new/frontpage-new.component';
import {MetalsComponent} from './metals/metals.component';
import {SingleJewelleryComponent} from './single-jewellery/single-jewellery.component';
import {SustanabilityComponent} from './sustanability/sustanability.component';

const routes: Routes=[
    {path:"",component: FrontpageNewComponent},
    {path:"about",component: AboutComponent},
    {path:"gallery",component: GalleryComponent},
    {path:"gallery/:id",component:SingleJewelleryComponent,pathMatch: 'full'},
    {path:"pearls",component: PearlsComponent},
    {path: "sapphires",component: SapphiresComponent},
    {path: "metals", component:MetalsComponent },
    {path: "vaerkstedet", component:VaerkstedetComponent},
    {path: "sustainability",component:SustanabilityComponent},
    {path:"find",component: FindComponent},
    { path: '**', component: FrontpageNewComponent }
]

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'}),
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{}