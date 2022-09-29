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
    private activatedRouter: ActivatedRoute
  ) {}

  public movies: BehaviorSubject<any> = new BehaviorSubject(0);
  public searchText: string;

  onSearchClick() {
    return this.apiService
      .SearchByText(this.searchText)
      .pipe(
        tap((response) =>
          this.movies.next(
            response['results'].sort((a, b) => b.vote_average - a.vote_average)
          )
        )
      )
      .subscribe();
  }
}
