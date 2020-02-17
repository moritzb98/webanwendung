import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Veranstaltungsmanager';
  loading = true;

  ngOnInit() {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        this.loading = false;
      }
    };
  }

}
