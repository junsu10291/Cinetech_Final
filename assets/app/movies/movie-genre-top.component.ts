import { Component, Input } from "@angular/core";
import { Movie } from "./movie.model";

@Component({
    selector: 'app-movie-genre-top',
    templateUrl: './movie-genre-top.component.html',
    styles: [`
        
    `]
})
export class MovieGenreTopComponent {
    @Input() Genre : String; 
    @Input() MovieList : Movie[];
}