import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemon = new Pokemon();
  pokemones = new Array<Pokemon>();
  favpokemon = new Array<Pokemon>();
  findPokemon = new Array<Pokemon>();

  constructor(private http: HttpClient) { }

  leerApi(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('https://www.pokemon.com/el/api/pokedex/kalos');
  }

  // Agregar favoritos a un arreglo
  agregarFav(pokemon: Pokemon) {
    this.favpokemon.push(pokemon);
  }

  deleteFav(pokemon: Pokemon) {
    this.favpokemon.splice(this.favpokemon.indexOf(pokemon),1);
    // console.log(this.favpokemon.indexOf(pokemon));
    console.log(this.pokemon);
  }

  cargarPokemones() {
    if (this.pokemones.length === 0) {
      this.leerApi().subscribe((pokemonDesdeApi) => {
        this.pokemones = pokemonDesdeApi;
        this.findPokemon = this.pokemones;
      });
    }
  }

  filterPokemon(text: string) {
    this.findPokemon = this.pokemones.filter(
      pok => pok.name.toLowerCase().indexOf(text.toLowerCase()) !== -1 || pok.number.indexOf(text) !== -1
    );
  }

}
