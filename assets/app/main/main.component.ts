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

    genres = [];

    constructor(private movieService : MovieService) {}
    
    ngOnInit() {
        // this.movieService.getTopNowPlayingMovies(5)
        //     .subscribe(
        //         (movies : Movie[]) => {
        //             this.topMovies = movies;
        //             console.log(this.topMovies);
        //     });

        this.theatreTopMovies = this.movieService.getTopMovies("theatre", 5);
        this.actionTopMovies = this.movieService.getTopMovies("action", 5);
        this.comedyTopMovies = this.movieService.getTopMovies("comedy", 5);
        this.fantasyTopMovies = this.movieService.getTopMovies("fantasy", 5);
        this.scifiTopMovies = this.movieService.getTopMovies("scifi", 5);

        this.genres = [
            {'genre': "theatre", 'list': this.theatreTopMovies}, 
            {'genre': "action", 'list': this.actionTopMovies}, 
            {'genre': "comedy", 'list': this.comedyTopMovies}, 
            {'genre': "fantasy", 'list': this.fantasyTopMovies}, 
            {'genre': "scifi", 'list': this.scifiTopMovies}];
    }
}