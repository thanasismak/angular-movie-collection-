import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCollectionComponent } from './movie-collection/movie-collection.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: "movie", component: MovieDetailsComponent },
  { path: "collection", component: MovieCollectionComponent },
  { path: "", redirectTo: "#", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
