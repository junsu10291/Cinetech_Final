import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { Movie } from "./movie.model";

@Injectable()
export class MovieService {
    constructor(private http: Http) {}

    getTopMovies(genre) {
        return this.http.get("http://localhost:3000/movie/topMovies/" + genre) 
            .map((response: Response) => {
                    console.log(response);
                    const responseJson = response.json().obj;
                    let movies : Movie[] = [];
                    for (let movie of responseJson) {
                        movies.push(
                            new Movie(
                                movie.title, 
                                movie._id,
                                movie.genre,
                                movie.backdrop_path,
                                movie.poster_path,
                                movie.trailer_path,
                                movie.popularity,
                                movie.vote_count,
                                movie.vote_average,
                                movie.country,
                                movie.overview,
                                movie.cast)
                        )
                    }

                    return movies;
                }
            )
            .catch((error: Response) => Observable.throw(error.json()));   
    }

    getStars(user, movieId) {
        return this.http.get("http://localhost:3000/movie/" + user + "/" + movieId)
                    .map((response: Response) => response)
                    .catch((error: Response) => Observable.throw(error));
    }

    updateStars(user, movieId, rating) {
        const body = JSON.stringify(rating);
        const headers = new Headers({'Content-Type': 'application/json'});

        // does not send the request, simply sets up the observable
        return this.http.patch('http://localhost:3000/movie/' + user + "/" + movieId, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }    
}