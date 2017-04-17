import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { MainComponent } from "./main/main.component"
import { PersonalComponent } from "./personal/personal.component";

const APP_ROUTES: Routes = [
    { path: '', component: MainComponent },
    { path: 'personal', component: PersonalComponent },
    { path: 'recommendations', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

