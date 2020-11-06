import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public url = ' https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0';

  constructor(
    private http: HttpClient
    ) {}

    public buscarPokemons() {
      return this.http.get(this.url);
    }

    public buscarPokemonNumero(url: string) {
      return this.http.get(url);
    }
}
