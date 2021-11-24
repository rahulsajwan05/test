import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CastegoryBasedComponent } from './castefory-based/castegory-based/castegory-based.component';
import { GreenFertilizerComponent } from './green-fertilizer/green-fertilizer/green-fertilizer.component';

@NgModule({
  declarations: [
    AppComponent,
    CastegoryBasedComponent,
    GreenFertilizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   BrowserModule,
   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
