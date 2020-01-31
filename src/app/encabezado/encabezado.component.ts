import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';

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

  buscarPokemon() {
    console.log(this.searchPokemon);
  }

  goFavorites() {
    this.Ruta.navigateByUrl('/favoritesPokemon');
  }

}
