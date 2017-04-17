import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'app-movie-stars',
    templateUrl: './movie-stars.component.html',
    styles: [`
         
    `]
})
export class MovieStarsComponent implements OnInit {
    @Input() numStars : number;

    labelShow = false;
    stars = [];

    ngOnInit() {
        for (let i = 0; i < 5; i++) {
            this.stars.push({"id": i, "fill": false, "color": "black"});
        }

        this.fillStars(this.numStars);
    }

    focusStars(starId) {
        this.fillStars(starId);
    }

    unfocusStars() {
        for (let i = 0; i < this.stars.length; i++) {
            this.stars[i].fill = false;
            this.stars[i].color = "black";
        }
    }

    fillStars(rating) {
        for (let i = rating; i >= 0; i--) {
            this.stars[i].fill = true;
            this.stars[i].color = "#e3cf7a";
        }
    }

}