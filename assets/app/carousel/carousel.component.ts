import { Component, Input, OnInit } from "@angular/core";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    providers: [NgbCarouselConfig]
})

export class CarouselComponent implements OnInit {   
    @Input() slidePath : String[];
    slides = [];

    ngOnInit() {
        for (let i = 0; i < this.slidePath.length; i++) {
            this.slides.push(
                {'img': this.slidePath[i], 'info': {'label': "Label1", 'title': "Title1", 'avgRating': "Avg1", 'tags': "Tag1"}}
            );
        }
    }
    
    constructor(config: NgbCarouselConfig) {}
}