import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "./movie.model";
import { MovieService } from "./movie.service";

@Component({
    selector: 'app-movie-stars',
    templateUrl: './movie-stars.component.html',
    styles: [`
         
    `]
})
export class MovieStarsComponent implements OnInit {
    numStars : number = 0;
    @Input() movie: Movie;
    @Input() fixed: Boolean;

    labelShow = false;
    stars = [];

    constructor(private movieService : MovieService) {
        for (let i = 1; i <= 5; i++) {
            this.stars.push({"id": i, "fill": false, "color": "black"});
        }
    }

    ngOnInit() {
        if (this.fixed) {
            this.movieService.getMovie(this.movie.id)
                .subscribe(
                    response => {
                        this.numStars = response.vote_average;
                        this.movie.vote_average = response.vote_average;
                        this.movie.vote_count = response.vote_count;
                        this.fillStars(Math.round(this.numStars));
                    }
                );
        } else {
            this.movieService.getStars(localStorage.getItem('userId'), this.movie.id)
                .subscribe(
                    response => {
                        this.numStars = response.obj;
                        this.fillStars(this.numStars);
                    }
                );
        }
    }

    focusStars(starId) {
        if (!this.fixed) {
            this.fillStars(starId);
        }
    }

    unfocusStars() {
        if (!this.fixed) {
            for(let i = 0; i < this.stars.length; i++) {
                this.stars[i].fill = false;
                this.stars[i].color = "black";
            }
        }
    }

    onMouseLeave() {
        this.fillStars(this.numStars);
    }

   fillStars(rating) {
        for (let i = rating - 1; i >= 0; i--) {
            this.stars[i].fill = true;
            this.stars[i].color = "#8a4e5b";
        }
    }

    movieClick(starId, event) {
        if (!this.fixed) {
            this.movieService.updateStars(
                localStorage.getItem('userId'), 
                this.movie.id, 
                starId)
                    .subscribe(
                        result => {
                            console.log(result); 
                            this.numStars = result.obj;
                        }
                    );
            event.stopPropagation();
        }
    }
}