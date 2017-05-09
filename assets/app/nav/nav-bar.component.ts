import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ModalService } from "../modal/modal.service";
import { MovieService } from "../movies/movie.service";
import { Movie } from "../movies/movie.model";
import { SearchModalComponent } from "../movies/search-modal.component";


@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
        .search-form {
            margin-right: 350px;
        }
    `]
})

export class NavBarComponent implements OnInit {
    signUpForm: FormGroup;
    signInForm: FormGroup;
    searchForm: FormGroup;
    openedModel: NgbModalRef;
    ngOnInit() {
        this.signUpForm = new FormGroup({
            userName: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ])
        })

        this.modalCloseService.modalClose.subscribe(
            result => {
                if (this.openedModel != null) {
                    this.openedModel.close();
                }                
            }
        );

        this.signInForm = new FormGroup({
            userName: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        })

        this.searchForm = new FormGroup({
            search: new FormControl(null, Validators.required),
        })
    }

    constructor(
        private movieService: MovieService, 
        private modalService: NgbModal, 
        private authService: AuthService, 
        private modalCloseService: ModalService,
        private _changeDetectionRef : ChangeDetectorRef) {}

    onSearchSubmit() {
        const search = this.searchForm.value.search;

        this.movieService.search(search)
        .subscribe(
            data => {
                this.openSearchModal(data);
            },
            error => {
                console.log("error retrieving search movie!");
                console.log(error);
            }
        );
    }

    open(content) {
        this.openedModel = this.modalService.open(content);
    }

    openSearchModal(movies) {
        this.openedModel = this.modalService.open(SearchModalComponent, { size: "lg" });
        this.openedModel.componentInstance.movies = movies;
    } 

    onSignUpSubmit() {
        const user = new User(this.signUpForm.value.userName, this.signUpForm.value.password, this.signUpForm.value.email);
        
        this.authService.signup(user)
            .subscribe(
                data => {
                    console.log(data);
                    this.openedModel.close();
                },
                error => console.log(error)
            );

        this.signUpForm.reset();
    }
    
    onSignInSubmit() {
        const user = new User(this.signInForm.value.userName, this.signInForm.value.password);

        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.openedModel.close();
                },
                error => {
                    console.log(error);
                }
            );

        this.signInForm.reset();
    }

    logout() {
        this.authService.logout();
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}