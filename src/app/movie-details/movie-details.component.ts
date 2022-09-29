import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, tap } from 'rxjs';
// import { tap } from 'rxjs/internal/operators/tap';
import { ApiService } from '../api.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  routeParamsSubscription: Subscription;
  constructor(
    private apiService: ApiService,
    private activatedRouter: ActivatedRoute
  ) {}
  postRating: { value: number };
  rating: number;
  addTofav: boolean = false;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  detailedMovie;

  // ngOnInit() {

  // }
  ngOnInit() {
    this.routeParamsSubscription = this.activatedRouter.params.subscribe(
      (params) => {
        let mid = params['movie_id'];
        this.apiService.getMoviesDetailsByID(mid).pipe(
          tap((response) => {
            response ? this.detailedMovie.next(response) : null;
            console.log(response);
          })
        );
      }
    );
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }

  onPostRating(rating) {
    this.apiService.postRating(rating).subscribe(
      (response) => {
        location.reload();
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addTofavorite(addTofav) {
    console.log('inside addTofavorite function');
    localStorage.setItem('true', JSON.stringify(this.addTofav));
  }

  toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
