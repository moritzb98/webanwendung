import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})
export class StartseiteComponent implements OnInit {
  public users: any = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = this.userService.getUsers().subscribe(
      data => {
        this.users = data.users;
        console.log(this.users);
      },
      err => {
        console.log(err);
      }
    );
  }

  getUser(id) {
    localStorage.setItem('userID', id);
  }
}
