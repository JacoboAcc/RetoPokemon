import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemones: Array<Pokemon> = new Array<Pokemon>();

  constructor(private pokemonInyectado: PokemonService, private Ruta: Router) { }

  ngOnInit() {
    this.pokemonInyectado.leerApi().subscribe((pokemonDesdeApi) => {
      this.pokemones = pokemonDesdeApi;
    });
  }

}
