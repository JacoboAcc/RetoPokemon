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

  constructor(private route: ActivatedRoute, private pokemonInyectado: PokemonService) {}

  ngOnInit() {
  }

  // Agregar favoritos a un arreglo
  agregarFav(pokemon: Pokemon) {
    this.pokemonInyectado.agregarFav(pokemon);
    window.alert('Pokemon agregado');
  }

}
