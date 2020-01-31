import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  favpokemon = [];
  pokemon: Pokemon = new Pokemon();

  constructor(private http: HttpClient) { }

  leerApi(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('https://www.pokemon.com/el/api/pokedex/kalos');
  }

  // Agregar favoritos a un arreglo
  agregarFav(pokemon: Pokemon) {
    this.favpokemon.push(pokemon);
    console.log(this.favpokemon);
  }
}
