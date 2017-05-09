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
    theatreTopMovies : Movie[] = [];
    actionTopMovies : Movie[] = [];
    comedyTopMovies : Movie[] = [];
    fantasyTopMovies : Movie[] = [];
    scifiTopMovies : Movie[] = [];
    slides = [
        {"img" : "./img/carousel_11.jpg", "info" : {"label": "Today's Animation", "title": "Your Name.", "average": "Average rating: 4.5"}},
        {"img" : "./img/carousel_2.jpg", "info" : {"label": "Best Picture of 2016", "title": "Moonlight", "average": "Average rating: 4.1"}},
        {"img" : "./img/carousel_3.jpg", "info" : {"label": "Today's Action", "title": "Dark Knight", "average": "Average rating: 4.8"}},
        ];

    genres = [];

    constructor(private movieService : MovieService) {}
    
    ngOnInit() {
        this.genres = [];

        this.movieService.getTopMovies("theatre")
            .subscribe(
                (movies: Movie[]) => {
                    this.theatreTopMovies = movies;
                    this.genres.push(
                        {'genre': "Theatre", 'list': this.theatreTopMovies}
                    );
            });

        this.movieService.getTopMovies("Action")
            .subscribe(
                (movies: Movie[]) => {
                    this.actionTopMovies = movies;
                    this.genres.push(
                        {'genre': "Action", 'list': this.actionTopMovies}
                    );
            });

        this.movieService.getTopMovies("Comedy")
            .subscribe(
                (movies: Movie[]) => {
                    this.comedyTopMovies = movies;
                    this.genres.push(
                        {'genre': "Comedy", 'list': this.comedyTopMovies}
                    );
            });

        this.movieService.getTopMovies("Fantasy")
            .subscribe(
                (movies: Movie[]) => {
                    this.fantasyTopMovies = movies;
                    this.genres.push(
                        {'genre': "Fantasy", 'list': this.fantasyTopMovies}
                    );
            });

        this.movieService.getTopMovies("Science Fiction")
            .subscribe(
                (movies: Movie[]) => {
                    this.scifiTopMovies = movies;
                    this.genres.push(
                        {'genre': "Science Fiction", 'list': this.scifiTopMovies}
                    );
            });
    }
}