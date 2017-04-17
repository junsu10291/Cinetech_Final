import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "./movie.model";

@Component({
    selector: 'app-movie-input',
    templateUrl: './movie-input.component.html',
    styles: [`

    `]
})
export class MovieInputComponent implements OnInit {
    @Input() movie: Movie;
    @Input() elementWidth: String;
    @Input() elementHeight: String;

    labelShow = false;
    stars = [];

    ngOnInit() {
        for (let i = 0; i < 5; i++) {
            this.stars.push({"id": i, "fill": false});
        }
    }

    focusStars(starId) {
        for (let i = starId; i >= 0; i--) {
            this.stars[i].fill = true;
        }
    }

    unfocusStars() {
        for (let i = 0; i < this.stars.length; i++) {
            this.stars[i].fill = false;
        }
    }

    modalTrigger() {

    }
}