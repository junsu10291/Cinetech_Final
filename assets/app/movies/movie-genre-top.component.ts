import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "./movie.model";

@Component({
    selector: 'app-movie-genre-top',
    templateUrl: './movie-genre-top.component.html',
    styles: [`
        
    `]
})
export class MovieGenreTopComponent implements OnInit {
    @Input() Genre : String; 
    @Input() MovieList : Movie[];

    ngOnInit() {
        this.MovieList = this.MovieList;
    }
}