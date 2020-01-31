import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.scss']
})
export class DetallePokemonComponent implements OnInit {

  pokemon: Pokemon = new Pokemon();

  constructor(private route: ActivatedRoute, private pokemonInyectado: PokemonService, ) {
    this.pokemon = this.pokemonInyectado.pokemon;
   }

  ngOnInit() {
  }

  agregarFav(pokemon) {
    window.alert('Pokemon agregado');
    this.pokemonInyectado.agregarFav(pokemon);
  }


}
