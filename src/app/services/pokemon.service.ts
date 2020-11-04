import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = ' https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0';
  private imagem = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

  constructor(
    private http: HttpClient
  ) { }

  public buscarPokemons(offset = 0, limit= 10) {
    return this.http.get(`${this.url}?limit=${limit}&offset=${offset}`).pipe(
      map(resultado => {
        return resultado['results'];
      }),
      map(pokemon => {
        return pokemon.map((poke, index) => {
          poke.imagem = this.imagemPokemon(index + offset + 1);
          poke.pokeIndex = offset + index + 1;
          return poke;
      });
      })
    )
  }

  //public paginaPokemons(pagina: number){
   // if (pagina <= 0) {
   //   pagina = 1;
    //}
   // return this.http.get(`${this.url}?page=${pagina}`);
  //}

  imagemPokemon(index) {
    return `${this.imagem}${index}.png`;
  }

  detalhesPokemon(index) {
    return this.http.get(`${this.url}/pokemon/${index}`).pipe(
      map(poke => {
        let sprites = Object.keys(poke['sprites']);
        poke['imagem'] = sprites.map(spriteKey => poke ['sprites'] [spriteKey])
        .filter (img => img);
        return poke;
      })
    );
  }

  
}
