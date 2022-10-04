import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
// import { CustomValidatorsService } from '../custom-validators.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MovieDto } from './movies.interface';

// import MovieDetailsComponent from '../movie-details'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
  ) {}

  public movies$: BehaviorSubject<any> = new BehaviorSubject(null);
  public searchText: string;

  onSearchClick() {
    return this.apiService
      .SearchByText(this.searchText)
      .pipe(
        tap((results) => {
          this.movies$?.next(results);
        })
      )
      .subscribe();
  }
}

// pipe(
//   tap((response) => {
//     if (response) {
//       this.movies.next(
//         this.filterbyVt(response['results'])
//       );
//     }
//   })
// )
// filterbyVt = (movie: MovieDto[]) => {
//   let filteredlist = movie?.sort((a, b) => b.vote_average - a.vote_average);
//   return filteredlist;
// }
