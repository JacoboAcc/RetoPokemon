import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemon: Pokemon = new Pokemon();

  constructor() { }
}
