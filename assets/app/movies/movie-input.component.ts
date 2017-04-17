import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "./movie.model";
import { MovieDetailModalComponent } from "../movies/movie-detail-modal.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-movie-input',
    templateUrl: './movie-input.component.html',
    styles: [`
        .card-img-custom {
            background-color: rgba(199, 192, 192, 0.78);
            height: 40%;
            bottom: 0;
            top: inherit;
            text-align: center;
            padding-top: 15%;
            font-weight: bold;
        }   

        .custom-card:hover {
            border-color: #337ab7;
        }
    `]
})
export class MovieInputComponent implements OnInit {
    @Input() movie: Movie;
    @Input() elementWidth: number;

    ImgWidth: String = "";
    ImgHeight: String= "";
    Width: String = "";
    Height: String = "";
    fontSize: String = "20px";

    ngOnInit() {
        this.Height = (this.elementWidth * 1.5) + "px";
        this.Width = this.elementWidth + "px";
        this.ImgHeight = (this.elementWidth * 1.5 - 2) + "px";
        this.ImgWidth = (this.elementWidth - 2) + "px";

        if (this.elementWidth <= 250) {
            this.fontSize = "10px";
        } else  {
            this.fontSize = "25px";
        }
    }

    constructor(private modalService: NgbModal) {}

    openModal() {
        const modalRef = this.modalService.open(
            MovieDetailModalComponent, 
            { size: "lg" });

        //modalRef.componentInstance.name = 'World';
    } 
}