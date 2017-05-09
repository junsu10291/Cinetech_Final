import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { User } from '../auth/user.model';

@Injectable()
export class PersonalService {
    constructor(private http: Http) {}

    getUser(userId) {
        return this.http.get("http://localhost:3000/user/" + userId) 
            .map((response: Response) => {
                    console.log(response);
                    const responseJson = response.json().obj;
                    let targetUser = responseJson
                    return targetUser;
                }
            )
            .catch((error: Response) => Observable.throw(error));   
    }
}