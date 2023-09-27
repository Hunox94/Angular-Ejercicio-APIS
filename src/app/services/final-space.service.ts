import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FinalSpace} from "../common/FinalSpaceAPI";

@Injectable({
  providedIn: 'root'
})
export class FinalSpaceService {

  constructor(private http:HttpClient) { }

  getSpace(): Observable<FinalSpace>{
    return this.http.get<FinalSpace>('https://finalspaceapi.com/api/v0/character/')
  }
}
