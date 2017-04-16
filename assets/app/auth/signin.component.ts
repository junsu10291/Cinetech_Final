import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    myForm: FormGroup;

    onSubmit() {
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            password: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
        });
    }
}