import { Component, OnInit, Input } from "@angular/core"
import { Movie } from "../movies/movie.model";

@Component ({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styles: [`
        .card {
            background-color: rgba(255, 125, 129, 0.68);
        }

        .main-left-panel {
            width: 26%;
            display: inline-block;
            float: left;
        }


    `]
})
  
export class PanelComponent implements OnInit {
    @Input() MovieList : Movie[];
    ngOnInit() {}
}

