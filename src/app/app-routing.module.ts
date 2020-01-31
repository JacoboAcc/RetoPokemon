import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detallePokemon', component: DetallePokemonComponent},
  {path: 'favoritesPokemon', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
