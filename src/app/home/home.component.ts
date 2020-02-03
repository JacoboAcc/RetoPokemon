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

  constructor(private pokemonInyectado: PokemonService, private Ruta: Router, private Rute: ActivatedRoute) { }

  ngOnInit() {
    this.pokemonInyectado.cargarPokemones();
  }

  irDetalle(pokemon: Pokemon) {
    this.pokemonInyectado.pokemon = pokemon;
    this.Ruta.navigateByUrl('/detallePokemon');
  }

}
