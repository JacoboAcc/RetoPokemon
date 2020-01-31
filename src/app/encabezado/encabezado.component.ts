import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  searchPokemon = '';

  constructor(private pokemonInyectado: PokemonService) { }

  ngOnInit() {
  }

  buscarPokemon() {
    console.log(this.searchPokemon);
  }

}
