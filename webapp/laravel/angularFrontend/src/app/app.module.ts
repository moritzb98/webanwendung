import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeService } from './home.service';
import { StartseiteComponent } from './startseite/startseite.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './Services/auth.service';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule, MatListModule } from '@angular/material';
import { StyleguideComponent } from './styleguide/styleguide.component';
import { CardComponent } from './card/card.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsComponent } from './events/events.component';
import { KontaktlisteComponent } from './kontaktliste/kontaktliste.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { KalenderComponent } from './kalender/kalender.component';
import { EigenesProfilComponent } from './eigenes-profil/eigenes-profil.component';


@NgModule({
  declarations: [
    AppComponent,
    StartseiteComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    StyleguideComponent,
    CardComponent,
    CreateEventComponent,
    EventsComponent,
    KontaktlisteComponent,
    InspirationComponent,
    KalenderComponent,
    EigenesProfilComponent,
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [HomeService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
