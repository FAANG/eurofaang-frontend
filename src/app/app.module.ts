import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {FlexLayoutModule} from "@angular/flex-layout";

import { MaterialModule } from "./material.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AquafaangComponent } from './projects/aquafaang/aquafaang.component';
import { BovregComponent } from './projects/bovreg/bovreg.component';
import { GeneswitchComponent } from './projects/geneswitch/geneswitch.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AquafaangComponent,
    BovregComponent,
    GeneswitchComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }