import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonService } from './services/pokemon.service';
import { HomeComponent } from './home/home.component';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detallePokemon', component: DetallePokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
