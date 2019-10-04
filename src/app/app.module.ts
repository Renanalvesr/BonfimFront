import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    CardEventComponent,
    EventComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [CardEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
