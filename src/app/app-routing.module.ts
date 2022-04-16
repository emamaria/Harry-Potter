import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  { path: '', component:  HomeComponent, pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:name', component: CharacterDetailComponent },
  { path: 'movies', component: MoviesComponent },
  { path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
