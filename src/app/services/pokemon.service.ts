import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonAPI} from "../common/PokemonAPI";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getPokemon(): Observable<PokemonAPI>{
    return this.http.get<PokemonAPI>('https://api.pokemontcg.io/v2/cards')
  }
}
