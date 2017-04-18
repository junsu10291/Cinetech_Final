import { Component, OnInit } from "@angular/core"
import { Movie } from '../movies/movie.model';
import { Movies } from '../movies/mock-movie';


@Component({
    selector: 'app-main-right-panel',
    templateUrl: './main-right-panel.component.html',
    styles: [`
        .main-right-panel {  
            width: 75%;
            float: left;
            height: 545px;
            padding-left: 20px;
        }

        .main-right-panel-big {
            width: 50%;
            float:left;
        }

        .main-right-panel-small {
            width: 50%;
            float: left;
        }

        .main-right-panel-grid {
            float: left;
        }
    `]
})

export class MainRightPanelComponent implements OnInit {
    movie : Movie;
    ngOnInit() {
        this.movie = new Movie("20th Century Women", "./img/default_poster.jpg");
    }
}