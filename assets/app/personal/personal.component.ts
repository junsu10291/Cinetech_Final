import { Component, OnInit} from "@angular/core";
import { User } from '../auth/user.model';
import { PersonalService } from './personal.service';
import { MovieService } from '../movies/movie.service';

@Component({
    selector: 'app-personal',
    templateUrl: './personal.component.html',
    styles: [`

    `]
})
export class PersonalComponent implements OnInit {
    targetUser : any;
    movieRatings = [];

    constructor(private personalService : PersonalService, private movieService : MovieService) {}

    ngOnInit() {
        console.log(localStorage.getItem('userId'))
        this.personalService.getUser(localStorage.getItem('userId'))
            .subscribe(
                (targetUser: any) => {
                    this.targetUser = targetUser;
                    console.log(targetUser[0].movieRatings);
                    this.movieRatings = targetUser[0].movieRatings;
                    for (let i = 0; i < this.movieRatings.length; i++) {
                        this.movieService.getMovies(this.movieRatings[i]._id)
                    }
                    ;
            });   
    }

    profileImage = "./img/empty_profile.gif";
    contents = 
    [
        {'icon': "fa fa-trophy fa-5", 'figure': 'Lv. 10', 'text': "MOVIE GURU"},
        {'icon': "fa fa-clock-o fa-5", 'figure': '386H', 'text': "PLAY TIME"}, 
        {'icon': "fa fa-thumbs-o-up fa-5", 'figure': 106, 'text': "NUM RATED"}, 
        {'icon': "fa fa-star fa-5", 'figure': 3.8, 'text': "AVG RATING"} 
    ];
}
