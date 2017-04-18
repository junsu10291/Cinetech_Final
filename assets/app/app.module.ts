import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { RateComponent } from "./stat/rate.component";
import { RegionComponent } from "./stat/region.component";
import { PersonalComponent } from "./personal/personal.component";
import { ActorComponent } from "./stat/actor.component";
import { RecommendationComponent } from "./recommendation/recommendation.component";

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
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselCaptionComponent } from "./carousel/carousel-caption.component";
import { MainComponent } from "./main/main.component";
import { MovieInputComponent } from "./movies/movie-input.component";
import { PanelComponent } from "./panel/panel.component";
import { MovieStarsComponent } from "./movies/movie-stars.component";
import { MovieGenreTopComponent } from "./movies/movie-genre-top.component";
import { MainPanelComponent } from "./panel/main-panel.component";
import { MovieDetailModalComponent } from "./movies/movie-detail-modal.component";
import { MainRightPanelComponent } from "./panel/main-right-panel.component";
import { ModalService } from "./modal/modal.service";


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
        MovieStarsComponent,
        MovieGenreTopComponent,
        MainPanelComponent,
        MovieDetailModalComponent,
        MainRightPanelComponent,
        PersonalComponent,
        RateComponent,
        RegionComponent,
        ActorComponent,
        RecommendationComponent,
    ],
    imports: [
        BrowserModule, 
        FormsModule, 
        routing, 
        ReactiveFormsModule,
        HttpModule,
        NgbModule.forRoot(),
        ChartsModule
        ],
    providers: [AuthService, ModalService],
    entryComponents: [MovieDetailModalComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}