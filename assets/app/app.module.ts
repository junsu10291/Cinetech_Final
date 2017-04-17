import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
import { HttpModule } from "@angular/http";
import { AuthService } from "./auth/auth.service";
import { NavBarComponent } from "./nav/nav-bar.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselCaptionComponent } from "./carousel/carousel-caption.component";
import { MainComponent } from "./main/main.component";
import { MovieInputComponent } from "./movies/movie-input.component";
import { PanelComponent } from "./panel/panel.component";
import { MovieStarsComponent } from "./movies/movie-stars.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent,
        NavBarComponent,
        CarouselComponent,
        CarouselCaptionComponent,
        MainComponent,
        MovieInputComponent,
        PanelComponent,
        MovieStarsComponent
    ],
    imports: [
        BrowserModule, 
        FormsModule, 
        routing, 
        ReactiveFormsModule,
        HttpModule,
        NgbModule.forRoot()
        ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}