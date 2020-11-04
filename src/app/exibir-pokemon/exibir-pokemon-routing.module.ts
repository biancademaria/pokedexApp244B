import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExibirPokemonPage } from './exibir-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: ExibirPokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExibirPokemonPageRoutingModule {}
