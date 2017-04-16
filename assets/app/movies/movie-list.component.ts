import { Component, OnInit } from "@angular/core";
import { Movie } from "./movie.model";

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {
    movies: Movie[];

    // movieService? to retreive movies

    ngOnInit() {
        
    }
}