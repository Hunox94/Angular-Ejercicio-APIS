import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MonsterHunterAPI} from "../common/MonsterHunterAPI";

@Injectable({
  providedIn: 'root'
})
export class MonsterHunterService {

  constructor(private http:HttpClient) { }


  getMonsterHunter(): Observable<MonsterHunterAPI>
  {
    return this.http.get<MonsterHunterAPI>('https://mhw-db.com/weapons');
  }
}
