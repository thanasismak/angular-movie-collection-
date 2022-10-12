import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { BehaviorSubject, Observable, ReplaySubject, Subscription, tap } from 'rxjs';
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

  public movies$: ReplaySubject<any> = new ReplaySubject(null);
  public searchText: string;

  onSearchClick() {
    return this.apiService
      //SearchByText()
      .SearchByTextFilteredByVt(this.searchText)
      .subscribe((results) => {
        this.movies$?.next(results)
      });
  }

  addToFavorite = () => {
    //TODO...
    console.log('hello')
  }

  ngOnDestroy() {
    this.movies$.unsubscribe();
  }
}
