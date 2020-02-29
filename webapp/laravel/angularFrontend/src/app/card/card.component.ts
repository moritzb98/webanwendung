import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  imgurl: string;
  @Input()
  cardTitle: string;
  @Input()
  subtitle: string;
  @Input()
  datum: string;
  @Input()
  content: string;

  constructor() {
    this.imgurl = '../../assets/img/no_image.jpg';
  }

  ngOnInit() {
  }

}
