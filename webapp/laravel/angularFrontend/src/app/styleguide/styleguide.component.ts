import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.css']
})
export class StyleguideComponent implements OnInit {
  allUsers: any;
  public form = {
    email: null,
    password: null,
  };

  constructor(private homeService: HomeService) { 
   }

  ngOnInit() {
  }

  getUsers(){
    this.allUsers = this.homeService.getUsers().subscribe(
      data => {
        this.allUsers = data.users[0].name;
        console.log(data.users[0].name);
      },
      err => {
        console.log(err);
      }
    );
  }

  

}
