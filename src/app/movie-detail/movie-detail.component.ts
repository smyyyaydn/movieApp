import { Component, OnInit,Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
 selectedMovie: {id: number, name: string};

  @Input() movie:Movie
  constructor(){}
  ngOnInit() {

  }
}
