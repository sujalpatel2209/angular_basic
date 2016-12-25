import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from '@angular/router';

export const routes: APP_ROUTES = [
    { path:'directory', component: DirectoryComponent},
    { path:'', component: HomeComponent}
];

<!--export const APP_ROUTES_PROVIDER = [
    provideRouter(APP_ROUTES)
];-->