import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCollectionComponent } from './movie-collection/movie-collection.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component'

const routes: Routes = [
  { path: "details/movie/:movie_id", pathMatch: "full", component: MovieDetailsComponent },
  { path: "collection", component: MovieCollectionComponent },
  { path: 'movies', component: MoviesComponent },
  { path: "", redirectTo: "movies", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
