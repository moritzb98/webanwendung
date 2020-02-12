import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allUsers: any;

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
