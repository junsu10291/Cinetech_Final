import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-carousel-caption',
    templateUrl: './carousel-caption.component.html',
})

export class CarouselCaptionComponent {   
     @Input() info: any;

     constructor() {}
}