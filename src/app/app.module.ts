import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { RoutingModule } from './app.routes';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CardEventComponent } from './component/card-event/card-event.component';
import { CardEventService } from './services/card-event.service';
import { HttpClientModule } from '@angular/common/http';
import { EventComponent } from './views/event/event.component';
import { FooterComponent } from './component/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEventComponent } from './views/add-event/add-event.component';


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
  providers: [CardEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
