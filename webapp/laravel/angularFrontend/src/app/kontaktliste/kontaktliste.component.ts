import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontaktliste',
  templateUrl: './kontaktliste.component.html',
  styleUrls: ['./kontaktliste.component.css']
})
export class KontaktlisteComponent implements OnInit {
  toggleCatering = true;
  toggleDrinks = true;
  toggleEntertainment = true;
  toggleLocation = true;
  constructor() { }

  ngOnInit() {
  }

}
