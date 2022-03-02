import { Component, OnInit } from '@angular/core';
import { MovieDataService } from "../../../data/modules/movie-data/services/movie-data.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    public readonly movieDataService: MovieDataService
  ) { }

  ngOnInit(): void {
  }

}
