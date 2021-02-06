import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../api.service';
// import { CustomValidatorsService } from '../custom-validators.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  movies;
  searchText: string = '';
  ngOnInit(): void {
  }

  onSearchClick() {
    this.apiService.SearchByText(this.searchText).subscribe(
      (response) => {
        this.movies = response;
        console.log(response)
        console.log(this.searchText)
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
