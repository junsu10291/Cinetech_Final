import { Component, Input, OnInit } from "@angular/core";
import { Movies } from '../movies/mock-movie';
import { Movie } from "../movies/movie.model";
import { MovieDetailModalComponent } from "../movies/movie-detail-modal.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styles: [`
    
    `]
})
export class MainComponent implements OnInit {
    movies : Movie[] = [];
    
    ngOnInit() {
        this.movies = Movies;
    }

    constructor(private modalService: NgbModal) {}

    openModal() {
        this.modalService
        const modalRef = this.modalService.open(
            MovieDetailModalComponent, 
            { size: "lg" });

        //modalRef.componentInstance.name = 'World';
    }
}