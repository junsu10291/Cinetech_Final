import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "./movie.model";
import { MovieDetailModalComponent } from "../movies/movie-detail-modal.component";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { ModalService } from "../modal/modal.service";
import { MovieService } from "./movie.service";
import { AuthService } from "../auth/auth.service";

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
            border-color: #898989;
        }
    `]
})
export class MovieInputComponent implements OnInit {
    @Input() movie: Movie;
    @Input() elementWidth: number;
    @Input() elementHeight: number;

    ImgWidth: String = "";
    ImgHeight: String= "";
    Width: String = "";
    Height: String = "";
    fontSize: String = "20px";
    modalRef = null;

    constructor(
        private modalService: NgbModal, 
        private modalCloseService: ModalService,
        private movieService: MovieService,
        private authService: AuthService) {}

    ngOnInit() {
        if (this.elementHeight == null) {
            this.Height = (this.elementWidth * 1.5) + "px";
            this.ImgHeight = (this.elementWidth * 1.5 - 2) + "px";
        } else {
            this.Height = this.elementHeight + "px";
            this.ImgHeight = (this.elementHeight - 2) + "px";
        }

        this.Width = this.elementWidth + "px";
        this.ImgWidth = (this.elementWidth - 2) + "px";

        if (this.elementWidth <= 170) {
            this.fontSize = "10px";
        } else if (this.elementWidth <= 250) {
            this.fontSize = "15px";
        } else  {
            this.fontSize = "23px";
        }

        this.modalCloseService.modalClose.subscribe(
            result => this.closeModal(result)
        );

        this.movie = this.movie;
    }

    closeModal(modal : NgbModalRef ) {
        if (this.modalRef != null) {
            if (modal != this.modalRef) {
                this.modalRef.close();
            }
        }
    }
    
    openModal() {
        console.log("open modal");
        this.modalRef = this.modalService.open(
            MovieDetailModalComponent, 
            { size: "lg" });
        
        this.modalRef.componentInstance.movie = this.movie;

        this.modalCloseService.alertOpenModal(this.modalRef);
        
    } 

    loggedIn() {
        return this.authService.isLoggedIn();
    }
}