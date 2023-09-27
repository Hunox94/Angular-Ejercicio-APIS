import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./components/principal/principal.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {PersonajesComponent} from "./components/personajes/personajes.component";
import {ValorantComponent} from "./components/valorant/valorant.component";
import {MonsterHunterComponent} from "./components/monster-hunter/monster-hunter.component";
import {PokemonComponent} from "./components/pokemon/pokemon.component";
import {FinalSpaceComponent} from "./components/final-space/final-space.component";

const routes: Routes = [
  {
    path:'',
    pathMatch:"full",
    redirectTo:'principal'
  },
  {
    path: 'principal', component: PrincipalComponent,
  },
  {path:'personajes', component:PersonajesComponent},
  {path:'Valorant', component:ValorantComponent},
  {path: 'MonsterHunter', component:MonsterHunterComponent},
  {path: 'Pokemon', component: PokemonComponent},
  {path: 'FinalSpace', component:FinalSpaceComponent},
  {
    path: '**',
    component:ErrorPageComponent,
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
