import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { Movie } from "./movie.model";

@Injectable()
export class MovieService {
    constructor(private http: Http) {}

    getSimilarMovies(genre) {
        return this.http.get("http://localhost:3000/movie/similarMovies/" + genre) 
            .map((response: Response) => {
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
                            movie.runtime,
                            movie.vote_count,
                            movie.vote_average,
                            movie.country,
                            movie.overview,
                            movie.cast)
                    )
                }

                return movies;
            })
            .catch((error: Response) => Observable.throw(error.json()));           
    }

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
                                movie.runtime,
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

    getMovies(movieId) {
        console.log('everyday, i tired riendankadnfl');
        return this.http.get("http://localhost:3000/movie/" + movieId)
        .map((response: Response) => {
            const responseJson = response.json().obj;
            console.log(responseJson);
            return responseJson;
        })
        .catch((error: Response) => Observable.throw(error.json()));  
    }


    getStars(user, movieId) {
        return this.http.get("http://localhost:3000/movie/" + user + "/" + movieId)
                    .map((response: Response) => response.json())
                    .catch((error: Response) => Observable.throw(error));
    }

    updateStars(user, movieId, rating) {
        let object = {'rating': rating, 'userId': user, 'movieId': movieId};
        const body = JSON.stringify(object);
        const headers = new Headers({'Content-Type': 'application/json'});

        return this.http.patch('http://localhost:3000/movie/updateStars', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }    

    search(search) {
        return this.http.get("http://localhost:3000/movie/search/" + search)
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
                                movie.runtime,
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
            .catch((error: Response) => Observable.throw(error));   
    }
}