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

        .main-left-panel {
            width: 25%;
            display: inline-block;
            float: left;
        }


    `]
})
  
export class PanelComponent implements OnInit {
    movies = []
    ngOnInit() {
        this.movies = Movies;
    }

}

