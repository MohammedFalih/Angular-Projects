import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoModule } from './to-do/to-do.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ShoppingAppModule } from './shopping-app/shopping-app.module';
import { HttpClientModule } from '@angular/common/http';
import { WeatherAppModule } from './weather-app/weather-app.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToDoModule,
    ShoppingAppModule,
    WeatherAppModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
