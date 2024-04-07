import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoModule } from './to-do/to-do.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ShoppingAppModule } from './shopping-app/shopping-app.module';
import { HttpClientModule } from '@angular/common/http';
import { WeatherAppModule } from './weather-app/weather-app.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

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
    HttpClientModule,
    AuthenticationModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([])
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
