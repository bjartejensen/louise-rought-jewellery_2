import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import { AboutComponent } from './about/about.component';
import {VaerkstedetComponent} from './vaerkstedet/vaerkstedet.component';
import { PearlsComponent } from './pearls/pearls.component';
import {SapphiresComponent} from './sapphires/sapphires.component';

const routes: Routes=[
    {path:"",component: SapphiresComponent},
    {path:"about",component: AboutComponent}
]

@NgModule({
    imports: [BrowserModule,RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})

export class AppRoutingModule{}