import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styles: [`
    
    `]
})
export class CarouselComponent {   
    myInterval = 5000;
    noWrapSlides = false;
    active = 0;
    currIndex = 0;
    slides = [];

    addSlide() {
        var newWidth = 600 + this.slides.length + 1;
        this.slides.push({
            image: '../../public/img/carousel_1.jpg',
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][this.slides.length % 4],
            id: this.currIndex++
        });
    }

    assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = this.slides.length; i < l; i++) {
            this.slides[i].id = indexes.pop();
        }
    }

    constructor() {
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.active = 0;
        this.currIndex = 0;
        this.slides = [];

        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }

        console.log(this.slides);
    }
}