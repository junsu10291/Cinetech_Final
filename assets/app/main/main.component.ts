import { Component, Input, OnInit } from "@angular/core";
import { Movies } from '../movies/mock-movie';
import { Movie } from "../movies/movie.model";
import { MovieService } from "../movies/movie.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styles: [`
    
    `]
})
export class MainComponent implements OnInit {
    movies : Movie[] = [];
    topMovies;

    constructor(private movieService : MovieService) {}
    
    ngOnInit() {
        this.movies = Movies;

        this.movieService.getTopNowPlayingMovies(4)
            .subscribe(
                (movies) => {
                    this.topMovies = movies;
                    
                    
                    console.log(this.topMovies);
            });
    }
}