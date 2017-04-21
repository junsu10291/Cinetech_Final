import { Component, OnInit, Input } from "@angular/core"
import { Movie } from '../movies/movie.model';

@Component({
    selector: 'app-main-right-panel',
    templateUrl: './main-right-panel.component.html',
    styles: [`
        .main-right-panel {  
            width: 74%;
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

export class MainRightPanelComponent {
    @Input() MovieList : Movie[];
}