import { Injectable, EventEmitter } from "@angular/core";
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

export class ModalService {
    modalClose = new EventEmitter<NgbModalRef>();

    alertOpenModal(modal : NgbModalRef) {
        this.modalClose.emit(modal);
    }
}