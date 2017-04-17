import { Component, Input } from "@angular/core";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    providers: [NgbCarouselConfig]
})

export class CarouselComponent {   
    slides = 
    [
        {'img': "./img/carousel_1.jpg", 'info': {'label': "Label1", 'title': "Title1", 'avgRating': "Avg1", 'tags': "Tag1"}}, 
        {'img': "./img/carousel_2.jpg", 'info': {'label': "Label2", 'title': "Title2", 'avgRating': "Avg2", 'tags': "Tag2"}}, 
        {'img': "./img/carousel_3.jpg", 'info': {'label': "Label3", 'title': "Title3", 'avgRating': "Avg1", 'tags': "Tag3"}}
    ];

    constructor(config: NgbCarouselConfig) {
        
    }
}