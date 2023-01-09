import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NgModule adds metadata to the class AppModule
// it tells the module what its role is
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  // bootstrap is the first component of the project
  // only defined in the root module!!!
  bootstrap: [AppComponent],
})
export class AppModule {}
