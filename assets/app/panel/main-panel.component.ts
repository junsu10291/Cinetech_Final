import { Component, Input } from "@angular/core";
import { Movie } from "../movies/movie.model";

@Component({
    selector: "app-main-panel",
    templateUrl: "./main-panel.component.html",
    styles: [`
        main-left-panel {
            display: inline-block;
        }
        main-right-panel {
            display: inline-block;
        }
    `]
})

export class MainPanelComponent {
    @Input() MovieList : Movie[];
}