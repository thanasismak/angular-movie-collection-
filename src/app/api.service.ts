import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '85204a8cc33baf447559fb6d51b18313';
  session_id = 'bd3ff5e792156a9cfae16fcf031a1f6f';
  constructor(private httpClient: HttpClient) { }

  public getMovies() {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/314502-song-of-the-new-earth?api_key=${this.API_KEY}`);
  }
  public getMoviesDetails() {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/314502-song-of-the-new-earth?api_key=${this.API_KEY}`);
  }

  public SearchByText(searchText: string) {
    return this.httpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=en-US&query="${searchText}"&page=1&include_adult=false`);
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
