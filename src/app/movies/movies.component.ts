import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { observable, Observable, Subscription, tap } from 'rxjs';
// import { CustomValidatorsService } from '../custom-validators.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MovieDto } from './movies.interface';


// import MovieDetailsComponent from '../movie-details'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  routeParamsSubscription: Subscription;
  constructor(private apiService: ApiService, public dialog: MatDialog, private activatedRouter: ActivatedRoute) { }
  public movies: Observable<MovieDto>;
  detailedMovie;
  searchText: string;

  ngOnInit(): void {
    this.searchText = null;
  }

  onSearchClick() {
    const studentsObservable = this.apiService.SearchByText(this.searchText)
    studentsObservable.subscribe(response => {
      const sortedArray = response['results'].sort((a,b)=> b.vote_average - a.vote_average)
      this.movies = new Observable(obs => {
        obs.next(sortedArray);
        obs.complete()
      })
    })
  }

}
