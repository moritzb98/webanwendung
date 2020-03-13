import { EigenesProfilComponent } from './eigenes-profil/eigenes-profil.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { KontaktlisteComponent } from './kontaktliste/kontaktliste.component';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import { StyleguideComponent } from './styleguide/styleguide.component';

const routes: Routes = [
  {
    path: 'style',
    component: StyleguideComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'start',
    component: StartseiteComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'createEvent',
    component: CreateEventComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'events',
    component: EventsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'kontaktliste',
    component: KontaktlisteComponent,
    canActivate: [AfterLoginService]
  },

  {
    path: 'inspiration',
    component: InspirationComponent,
    canActivate: [AfterLoginService]
  },

  {
  path: 'meinProfil',
  component: EigenesProfilComponent,
  canActivate: [AfterLoginService]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
