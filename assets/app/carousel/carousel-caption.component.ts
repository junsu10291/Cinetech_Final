import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-carousel-caption',
    templateUrl: './carousel-caption.component.html',
    styles : [`
        #caption-wrapper {
            color: #898afb;
            font-weight: bolder;
        }

        #caption-label {
            font-size: 20px;
        }
    `]
})

export class CarouselCaptionComponent {   
     @Input() info: any;

     constructor() {}
}