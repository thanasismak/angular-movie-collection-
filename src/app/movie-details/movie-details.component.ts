import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  Title: string;
  Overview: string;
  Poster_path: string;
  Budget: number;
  Release_date: string;
  Revenue: number;
  Vote_average: number;
  Vote_count: number;
  Spoken_languages: object[];
  Genres: object[];
  postRating: { "value": number };
  rating: number = 0;

  ngOnInit(): void {
    this.Title = "Οι Ανατριχιαστικές Περιπέτειες της Σαμπρίνα (2018)";
    this.Overview = "After 7 years, The Rock finally returns to action to join forces with his WrestleMania opponent, John Cena, to create the most charismatic tag team of all time.  Can these 2 bitter rivals work together to defeat the formidable, chaos causing coalition of the Miz and R-Truth? Also, the Straight Edge Superstar CM Punk finally gets his one-on-one rematch for the WWE Championship when he challenges Alberto Del Rio. And just one month removed from their titanic clash that destroyed the ring, Mark Henry and Big Show battle in a rematch for the World Heavyweight Championship. Madison Square Garden comes alive for the 25th anniversary of Survivor Series.  Survivor Series (2011) was a PPV that took place on November 20, 2011 at Madison Square Garden in New York City. It was presented by THQ's WWE '12. It was the 25th annual Survivor Series event.";
    this.Poster_path = "/4eGoeIziBMxs60Y1mViz6nSjpPt.jpg";
    this.Budget = 0;
    this.Release_date = "2011-11-21";
    this.Revenue = 0;
    this.Vote_average = 7;
    this.Vote_count = 13;
    this.Spoken_languages = [
      {
        "english_name": "English",
        "iso_639_1": "en",
        "name": "English"
      }
    ];
    this.Genres = [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ];
  }
  onPostRatingtest(rating) {
    console.log(rating)
  }
  //Try to submit on stars 2 times to post
  onPostRating(rating) {
    this.apiService.postRating(rating).subscribe(
      (response) => {
        location.reload();
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
