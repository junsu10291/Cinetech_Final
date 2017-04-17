import { Component, OnInit } from "@angular/core"
import { Movie } from '../movies/movie.model';
import { Movies } from '../movies/mock-movie';


@Component ({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styles: [`
        .card {
            background-color: #ff7e82;
        }

    `]
})
  
export class PanelComponent implements OnInit {
    movies = []
    ngOnInit() {
        this.movies = Movies;
    }

}

