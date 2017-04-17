import { Component, Input, OnInit } from "@angular/core";
import { Movies } from '../movies/mock-movie';
import { Movie } from "../movies/movie.model";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styles: [`
    
    `]
})
export class MainComponent implements OnInit {
    movies : Movie[] = [];
    
    ngOnInit() {
        this.movies = Movies;
    }
    
}