import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";


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
    openedModel: NgbModalRef;
    signinError = false;

    ngOnInit() {
        this.signUpForm = new FormGroup({
            userName: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ])
        })

        this.signInForm = new FormGroup({
            userName: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        })
    }

    constructor(private modalService: NgbModal, private authService: AuthService) {}

    open(content) {
        this.openedModel = this.modalService.open(content);
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
                    this.signinError = false;
                },
                error => {
                    console.log(error);
                    this.signinError = true;
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