import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {AquafaangComponent} from "./projects/aquafaang/aquafaang.component";
import {BovregComponent} from "./projects/bovreg/bovreg.component";
import {GeneswitchComponent} from "./projects/geneswitch/geneswitch.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component"
import {GeronimoComponent} from "./projects/geronimo/geronimo.component";
import {RumigenComponent} from "./projects/rumigen/rumigen.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects/aquafaang', component: AquafaangComponent },
  { path: 'projects/bovreg', component: BovregComponent },
  { path: 'projects/geneswitch', component: GeneswitchComponent },
  { path: 'projects/geronimo', component: GeronimoComponent },
  { path: 'projects/rumigen', component: RumigenComponent },
  {path: '404', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

