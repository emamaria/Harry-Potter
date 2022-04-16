import { Component, OnInit } from '@angular/core';
import { PotterService } from '../potter.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  get movies(){
    return this.moviesService.movies

   
  }

  constructor(private moviesService: PotterService ) { }

  ngOnInit(): void {
  }

}
