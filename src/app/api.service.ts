import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, map, pipe, tap } from 'rxjs';
// import {  } from 'rxjs/operator/map'
// import { MovieDto } from './movies/movies.interface';

import { MovieDetailsComponent } from './movie-details/movie-details.component';
class MovieDto {
  constructor(
    public adult: boolean,
    public backdrop_path: string,
    // genre_ids: (2)[14, 10751]
    public id: number,
    public original_language: string,
    public original_title: string,
    public overview: string,
    public popularity: number,
    public poster_path: null,
    public release_date: string,
    public title: string,
    public video: false,
    public vote_average: number,
    public vote_count: number,
  ) { }
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '630a8685d779bf1f447346df12a461d3';
  session_id = 'bd3ff5e792156a9cfae16fcf031a1f6f';
  constructor(private httpClient: HttpClient) { }

  public getMovies() {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/314502-song-of-the-new-earth?api_key=${this.API_KEY}`);
  }
  public getMoviesDetails() {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/314502-song-of-the-new-earth?api_key=${this.API_KEY}`);
  }

  public getMoviesDetailsByID(id: number) {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}&language=en-US`);
  }

  public SearchByText(searchText: string): Observable<MovieDto> {
    return this.httpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=en-US&query="${searchText}"&page=1&include_adult=false`)
    .pipe(
      map((res: MovieDto[])=> res['results']))
  }

  public SearchByTextFilteredByVt(searchText: string): Observable<MovieDto> {
    return this.httpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=en-US&query="${searchText}"&page=1&include_adult=false`)
    .pipe(
      map((res: MovieDto[])=> res['results'].sort((a, b) => b.vote_average - a.vote_average)))
  }

  public postRating(rating: number) {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      });
    return this.httpClient.post(`https://api.themoviedb.org/3/movie/314502/rating?api_key=${this.API_KEY}&guest_session_id=${this.session_id}`,
      rating, { headers: headers });
  }
}
