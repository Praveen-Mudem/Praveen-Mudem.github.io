import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScrollSpyDirective } from './customdirective/scroll-spy.directive';
import { AboutComponent } from './about/about.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScrollSpyDirective,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FaIconLibrary,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
