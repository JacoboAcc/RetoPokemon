import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.scss']
})
export class DetallePokemonComponent implements OnInit {

  pokemon: Pokemon = new Pokemon();

  constructor(private pokemonInyectado: PokemonService) {
    this.pokemon = this.pokemonInyectado.pokemon;
   }

  ngOnInit() {
  }

  agregarFav(pokemon: Pokemon) {
  }

}
