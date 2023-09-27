import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ValorantAPI} from "../common/ValorantAPI";

@Injectable({
  providedIn: 'root'
})
export class ValorantService {

  constructor(private http:HttpClient) { }

  getValorant(): Observable<ValorantAPI>{
    return this.http.get<ValorantAPI>('https://valorant-api.com/v1/agents')
  }
}
