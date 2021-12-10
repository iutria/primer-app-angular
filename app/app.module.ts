import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { HttpClientModule } from '@angular/common/http';
import { DetallesComponent } from './detalles/detalles.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    TarjetaComponent,
    FavoritosComponent,
    DetallesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
