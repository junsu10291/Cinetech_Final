import { Component, OnInit } from "@angular/core";
import { Movie } from "../movies/movie.model";
import { Movies } from '../movies/mock-movie';


@Component({
    selector: 'app-recommendation',
    templateUrl: './recommendation.component.html',
    styles: [`

    `]
})


export class RecommendationComponent implements OnInit {
    movies : Movie[] = [];
    
    ngOnInit() {
        this.movies = Movies;
    }

}
