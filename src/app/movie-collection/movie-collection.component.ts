import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-collection',
  templateUrl: './movie-collection.component.html',
  styleUrls: ['./movie-collection.component.scss']
})
export class MovieCollectionComponent implements OnInit {

  constructor() { }
  Collection_id: number;
  Name: string;
  Overview: string;
  Title: string;
  Release_date: string;
  Genres: object[];
  Spoken_language: string;
  Collection: object[]
  
  ngOnInit(): void {
    const i = 0
    this.Collection = [
      {
        Movie: 'Movie 1', Properties: [
          {
            id: `${i + 1}`,
            Title: "Smackdown",
            Release_date: "27/08/2021",

            Genres: [
              {
                "id": 28,
                "name": "Action"
              },
              {
                "id": 18,
                "name": "Drama"
              }
            ]
            ,
            Spoken_language: 'Greek'
          }
        ]
      },
    ]
  }

}
