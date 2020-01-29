import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncabezadoComponent,
    DetallePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
