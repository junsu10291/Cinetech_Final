import { Component, OnInit } from "@angular/core"
import { Movie } from '../movies/movie.model';
import { Movies } from '../movies/mock-movie';


@Component({
    selector: 'app-main-right-panel',
    templateUrl: './main-right-panel.component.html',
    styles: [`
      
    `]
})

export class MainRightPanelComponent implements OnInit {
    movie : Movie;
    ngOnInit() {
        this.movie = new Movie("20th Cddddentury Women", "./img/default_poster.jpg");
    }
}