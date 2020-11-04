import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExibirPokemonPageRoutingModule } from './exibir-pokemon-routing.module';

import { ExibirPokemonPage } from './exibir-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExibirPokemonPageRoutingModule
  ],
  declarations: [ExibirPokemonPage]
})
export class ExibirPokemonPageModule {}
