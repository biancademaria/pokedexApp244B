import { Component} from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public next: string;
  public previous: string;

  public totalPaginas = 0;
  public pagina = 1;

  public listaPokemonApi = [];
  public listaPokemonExibir = [];

  constructor(
    private pokeApi: PokemonService
  ) {
    this.buscarPokemons();
  }

  public async buscarPokemons() {
    await this.pokeApi.buscarPokemons().subscribe(dados => {
      this.listaPokemonApi = []; //vai zerar a lista
      this.totalPaginas = dados['count'] / 10; //vai calcular o total das páginas

      this.previous = dados['previous']; //faz com que "anterior" traga os resultados de previous
      this.next = dados['next']; //faz com que "próximo" traga os resultados de next

      let listaApi = dados['results']; //exibe os resultados 

      for (let item of listaApi) {
        this.pokeApi.buscarPokemonNumero(item.url).subscribe(dadosPokemon => {
          this.listaPokemonApi.push(dadosPokemon);
          this.ordenarLista();
        });
      }
    });
  }

  private ordenarLista() {
    this.listaPokemonApi.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    this.listaPokemonExibir = this.listaPokemonApi;
  }

  public paginacao(url, movimento) {
    this.pagina = this.pagina + movimento;
    this.pokeApi.url = url;
    this.buscarPokemons();
  }

}
