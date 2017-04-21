import { Movie } from './movie.model';
import { Actors } from "../actors/mock-actors";

this.overview = "A live-action adaptation of Disney's version of the classic 'Beauty and the Beast' tale of a cursed prince and a beautiful young woman who helps him break the spell.";
this.movie = new Movie(
                "Beauty and the Beast",
                "randomID",
                ["Romance", "Fantasy"],
                "/6aUWe0GSl69wMTSWWexsorMIvwU.jpg",
                "/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
                "/c38r-SAnTWM",
                0,
                0,
                0,
                "United States of America",
                this.overview,
                Actors
            );

export const Movies: Movie[] = [
    this.movie,
    this.movie,
    this.movie,
    this.movie,
    this.movie,
    this.movie,
    this.movie,
    this.movie,
    this.movie,
    this.movie,
    this.movie,
    this.movie,
    this.movie,
    this.movie,
    this.movie
];