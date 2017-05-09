import { Component, Input, OnInit } from "@angular/core";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    providers: [NgbCarouselConfig]
})

export class CarouselComponent implements OnInit {   
    @Input() slides;

    ngOnInit() {}
    
    constructor(config: NgbCarouselConfig) {}
}