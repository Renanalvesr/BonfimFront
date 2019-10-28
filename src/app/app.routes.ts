import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { EventComponent } from './views/event/event.component';
import { AddEventComponent } from './views/add-event/add-event.component';
import { GraduationComponent } from './views/graduation/graduation.component';
import { EventDescriptionComponent } from './views/event-description/event-description.component';
import { CarouselGraduationComponent } from './component/carousel-graduation/carousel-graduation.component';
import { SigninComponent } from './component/signin/signin.component';
import { EditEventComponent } from './views/edit-event/edit-event.component';
import { AdminComponent } from './views/admin/admin.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'event', component: EventComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'event/desc/:id', component: EventDescriptionComponent },
    { path: 'admin/event/addEvent', component: AddEventComponent },
    { path: 'admin/event/desc/:id', component: EditEventComponent },
    { path: 'graduation', component: GraduationComponent },
    { path: 'carousel', component: CarouselGraduationComponent },
    { path: 'login', component: SigninComponent },
    { path: '**', component: NotFoundComponent },
];
export const RoutingModule = RouterModule.forRoot(routes);
