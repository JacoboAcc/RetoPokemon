import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemones: Array<Pokemon> = new Array<Pokemon>();

  constructor(private pokemonInyectado: PokemonService, private Ruta: Router, private Rute: ActivatedRoute) { }

  ngOnInit() {
    this.pokemonInyectado.leerApi().subscribe((pokemonDesdeApi) => {
      this.pokemones = pokemonDesdeApi;
    });
    console.log(this.Ruta.navigate);
    console.log(this.Rute.pathFromRoot);
  }

  irDetalle(pokemon: Pokemon) {
    this.pokemonInyectado.pokemon = pokemon;
    this.Ruta.navigateByUrl('/detallePokemon');
  }

}
