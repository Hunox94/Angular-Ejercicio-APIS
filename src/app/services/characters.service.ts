import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PersonajesRyMAPI} from "../common/PersonajesRyMAPI";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http:HttpClient) { }

  getCharacters(): Observable<PersonajesRyMAPI>{
    return this.http.get<PersonajesRyMAPI>(
      'https://rickandmortyapi.com/api/character');
  }
}
