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
    slides = ["./img/carousel_1.jpg", "./img/carousel_2.jpg", "./img/carousel_3.jpg"];

    genres = [];

    constructor(private movieService : MovieService) {}
    
    ngOnInit() {
        this.genres = [];

        this.movieService.getTopMovies("theatre")
            .subscribe(
                (movies: Movie[]) => {
                    console.log("theatre movies: ");
                    console.log(movies);
                    this.theatreTopMovies = movies.splice(0, 15);
                    this.genres.push(
                        {'genre': "Theatre", 'list': this.theatreTopMovies}
                    );
            });

        this.movieService.getTopMovies("Action")
            .subscribe(
                (movies: Movie[]) => {
                    console.log("action movies: ");
                    console.log(movies);
                    this.actionTopMovies = movies;
                    this.genres.push(
                        {'genre': "Action", 'list': this.actionTopMovies}
                    );
            });

        this.movieService.getTopMovies("Comedy")
            .subscribe(
                (movies: Movie[]) => {
                    console.log("comedy movies: ");
                    console.log(movies);
                    this.comedyTopMovies = movies;
                    this.genres.push(
                        {'genre': "Comedy", 'list': this.comedyTopMovies}
                    );
            });

        this.movieService.getTopMovies("Fantasy")
            .subscribe(
                (movies: Movie[]) => {
                    console.log("fantasy movies: ");
                    console.log(movies);
                    this.fantasyTopMovies = movies;
                    this.genres.push(
                        {'genre': "Fantasy", 'list': this.fantasyTopMovies}
                    );
            });

        this.movieService.getTopMovies("Science Fiction")
            .subscribe(
                (movies: Movie[]) => {
                    console.log("scifi movies: ");
                    console.log(movies);
                    this.scifiTopMovies = movies;
                    this.genres.push(
                        {'genre': "Science Fiction", 'list': this.scifiTopMovies}
                    );
            });
    }
}