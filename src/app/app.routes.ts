import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { EventComponent } from './views/event/event.component';
import { AddEventComponent } from './views/add-event/add-event.component';
import { GraduationComponent } from './views/graduation/graduation.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'event', component: EventComponent },
    { path: 'event/addEvent', component: AddEventComponent },
    { path: 'graduation', component: GraduationComponent },
    { path: '**', component: NotFoundComponent },
];
export const RoutingModule = RouterModule.forRoot(routes);
