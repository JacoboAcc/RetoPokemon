import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  searchPokemon = '';

  constructor(private Ruta: Router, private pokemonInyectado: PokemonService) { }

  ngOnInit() {
  }

  goFavorites() {
    this.Ruta.navigateByUrl('/favoritesPokemon');
  }

  filterPokemones(text: string) {
    this.pokemonInyectado.filterPokemon(text);
    // const pok = this.pokemonInyectado.pokemones;
    // console.log(this.searchPokemon);
    // console.log(pok.filter(el => el.name.toLowerCase().indexOf(text.toLowerCase()) !== -1));
    // this.pokemonInyectado.findPokemon = pok.filter(el => el.name.toLowerCase().indexOf(text.toLowerCase()) !== -1);
  }

}
