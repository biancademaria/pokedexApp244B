import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public listaPokemons: any = [];
  public pagina = 1;
  public totalPaginas = 1;
  offset = 0;
  pokemon = [];

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit(){
    this.carregarPokemons();
   // this.paginaPokemons(1);
  }

  carregarPokemons(carregarMais = false) {
    this.pokemonService.buscarPokemons(this.offset).subscribe(res =>{
      this.listaPokemons = res['name'];
      this.totalPaginas = res[carregarMais];
      console.log('Resultado: ', res);
      this.pokemon = res;
    })

  }

  // public paginaPokemons(pagina:number){
   // if (pagina <= 0) {
   //   pagina = 1;
   // }
   // this.pagina = pagina;
   // this.pokemonService.buscarPokemons(pagina).subscribe(dados =>{
   //   this.listaPokemons = dados['name'];
   //   this.totalPaginas = dados['limit'];
   //   console.log('LISTA: ', this.listaPokemons);
   // })
  //}


}
