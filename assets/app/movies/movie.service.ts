import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class MovieService {
    constructor(private http: Http) {}

    url = "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=92ce809a9456df5f21835cf4ff480b80";

    getTopNowPlayingMovies(k) {
        var options = {
            "method": "GET",
            "hostname": "api.themoviedb.org",
            "port": null,
            "path": "/3/movie/now_playing?page=1&language=en-US&api_key=92ce809a9456df5f21835cf4ff480b80",
            "headers": {}
        };

        return this.http.get(this.url)
            .map(
                (response: Response) => response
            )
            .catch((error: Response) => Observable.throw(error));
    }
}