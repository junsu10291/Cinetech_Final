import { Component, Input, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from "./movie.model";

@Component({
    selector: 'app-search-modal',
    templateUrl: './search-modal.component.html',
    styles: [`
        .modal-body-search {
            margin-left: 60px;
            margin-top: 30px;
        }
    `]
})
export class SearchModalComponent implements OnInit {
    @Input() movies : Movie[];

    ngOnInit() {}

    constructor(public activeModal: NgbActiveModal) { }
}