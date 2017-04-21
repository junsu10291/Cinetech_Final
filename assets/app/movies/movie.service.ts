import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { Movies } from "./mock-movie";

@Injectable()
export class MovieService {
    constructor(private http: Http) {}

    url = "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=92ce809a9456df5f21835cf4ff480b80";

    getTopMovies(genre, k) {
        // var movies = this.http.get("http://localhost.com/3000/topMovies/Theatre") // JSON
        //     .map(
        //         (response: Response) => response // change into list of Movies
        //     )
        //     .catch((error: Response) => Observable.throw(error));
        // }

        let movies = Movies;
        return movies; 
    }

    
}