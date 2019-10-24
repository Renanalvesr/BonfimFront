import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { CardEventService } from './services/card-event.service';
import { GraduationService } from './services/graduation.service';

import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardEventComponent } from './component/card-event/card-event.component';
import { CarouselGraduationComponent } from './component/carousel-graduation/carousel-graduation.component';
import { CardCarouselGraduationComponent } from './component/card-carousel-graduation/card-carousel-graduation.component';

import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { EventComponent } from './views/event/event.component';
import { AddEventComponent } from './views/add-event/add-event.component';
import { GraduationComponent } from './views/graduation/graduation.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GraduationButtonComponent } from './component/graduation-button/graduation-button.component';
import { EventDescriptionComponent } from './views/event-description/event-description.component';
import { SigninComponent } from './component/signin/signin.component';
import { VmessageComponent } from './component/vmessage/vmessage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    CardEventComponent,
    EventComponent,
    FooterComponent,
    AddEventComponent,
    GraduationComponent,
    CarouselGraduationComponent,
    CardCarouselGraduationComponent,
    GraduationButtonComponent,
    EventDescriptionComponent,
    SigninComponent,
    VmessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CardEventService,
    GraduationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
