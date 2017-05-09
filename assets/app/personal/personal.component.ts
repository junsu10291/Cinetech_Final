import { Component, OnInit} from "@angular/core";
import { User } from '../auth/user.model';
import { PersonalService } from './personal.service';
import { MovieService } from '../movies/movie.service';
import { Movie } from "../movies/movie.model";
import { Movies } from "../movies/mock-movie";

@Component({
    selector: 'app-personal',
    templateUrl: './personal.component.html',
    styles: [`
        .genre-top-personal {
            width: 26.5%;
        }
    `]
})
export class PersonalComponent implements OnInit {
    movieRatings = [];
    ratedMovies : Movie[];
    genre = "Rated Movies";
    targetUser : User;
    targetMovie : any;
    averageRate = [0,0,0,0,0];
    num_rate = 0;
    ave_rate = 0;
    playTime = 0;
    contents = []
    userName = String;
    id_list = [];
    idList = {};

    constructor(private personalService : PersonalService, private movieService : MovieService) {}

    ngOnInit() {
        console.log(localStorage.getItem('userId'))
        console.log('uasdfasl')
         this.personalService.getUser(localStorage.getItem('userId'))
            .subscribe(
                (targetUser: User) => {
                    this.targetUser = targetUser;
                    this.userName = targetUser[0].userName
                    this.num_rate = targetUser[0].movieRatings.length;
                    this.movieRatings = targetUser[0].movieRatings;

                    for (let i = 0; i < this.movieRatings.length; i++) {
                        this.ave_rate += this.movieRatings[i].rating
                        this.id_list.push(this.movieRatings[i].movie)
                    }
                    this.idList['id'] = this.id_list

                    this.movieService.getMovies(this.idList).subscribe(
                        result => {
                            this.ratedMovies = result;
                        }
                    )
                    
                    this.playTime = this.num_rate * 2
                    if (this.num_rate != 0) {
                        this.ave_rate /= this.num_rate
                        this.ave_rate.toFixed(2)
                    } else {
                        this.ave_rate = 0
                    }
                             this.contents = 
            [
                {'icon': "fa fa-trophy fa-5", 'figure': 'Lv. 1', 'text': "MOVIE NOVICE"},
                {'icon': "fa fa-clock-o fa-5", 'figure': this.playTime + 'H', 'text': "PLAY TIME"}, 
                {'icon': "fa fa-thumbs-o-up fa-5", 'figure': this.num_rate, 'text': "NUM RATED"}, 
                {'icon': "fa fa-star fa-5", 'figure': Math.round(this.ave_rate), 'text': "AVG RATING"} 
            ];
            });     
        

    }

    profileImage = "./img/empty_profile.gif";
}
