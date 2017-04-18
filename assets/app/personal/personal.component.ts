import { Component } from "@angular/core";

@Component({
    selector: 'app-personal',
    templateUrl: './personal.component.html',
    styles: [`

    `]
})
export class PersonalComponent {
    profileImage = "./img/empty_profile.gif";
    contents = 
    [
        {'icon': "fa fa-trophy fa-5", 'figure': 'level 10', 'text': "MOVIE GURU"},
        {'icon': "fa fa-film fa-5", 'figure': '386H', 'text': "PLAY TIME"}, 
        {'icon': "fa fa-clock-o fa-5", 'figure': 106, 'text': "NUM RATED"}, 
        {'icon': "fa fa-star fa-5", 'figure': 3.8, 'text': "AVG RATING"} 
    ];
}


