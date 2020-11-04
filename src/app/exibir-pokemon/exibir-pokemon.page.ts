import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exibir-pokemon',
  templateUrl: './exibir-pokemon.page.html',
  styleUrls: ['./exibir-pokemon.page.scss'],
})
export class ExibirPokemonPage implements OnInit {

  public index = 0;
  public detalhes: any;
  private imagem = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
  private url = ' https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0';

  public listaPokemons: any = [];
  public pagina = 1;
  public totalPaginas = 1;
  offset = 0;
  pokemon: any;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.index = Number(this.route.snapshot.paramMap.get('index'));
    this.pokemon = String(this.route.snapshot.paramMap.get('nome'));
    this.pokemonService.detalhesPokemon(this.index).subscribe(details => {
      this.detalhes = details;
      console.log('Detalhes', details);
    });
}


}
