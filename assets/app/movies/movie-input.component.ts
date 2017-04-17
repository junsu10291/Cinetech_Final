import { Component, Input } from "@angular/core";
import { Movie } from "./movie.model";

@Component({
    selector: 'app-movie-input',
    templateUrl: './movie-input.component.html',
    styles: [`

    `]
})
export class MovieInputComponent {
    @Input() movie: Movie;
    @Input() elementWidth: String;
    @Input() elementHeight: String;

    modalTrigger() {

    }
}