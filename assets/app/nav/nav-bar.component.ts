import { Component } from "@angular/core";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
        .search-form {
            margin-right: 350px;
        }
    `]
})

export class NavBarComponent {

    constructor(private modalService: NgbModal) {}

    open(content) {
        this.modalService.open(content);
    }
}