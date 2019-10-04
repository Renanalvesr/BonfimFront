import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { EventComponent } from './views/event/event.component';
const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'event', component: EventComponent },
    { path: '**', component: NotFoundComponent },
];
export const RoutingModule = RouterModule.forRoot(routes);
