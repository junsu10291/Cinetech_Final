import { Component, OnInit } from "@angular/core";
import { Movie } from "../movies/movie.model";
import { Movies } from '../movies/mock-movie';
import { MovieService } from "../movies/movie.service";


@Component({
    selector: 'app-recommendation',
    templateUrl: './recommendation.component.html',
    styles: [`

    `]
})


export class RecommendationComponent implements OnInit {
    movies : Movie[] = [];

    constructor(private movieService: MovieService) {}
    
    ngOnInit() {
        this.movieService.getTopMovies("recommendation")
            .subscribe(
                (movies: Movie[]) => {
                    this.movies = movies;
                }
            )
    }
}
