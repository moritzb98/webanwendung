import { AuthTokenService } from './../Services/auth-token.service';
import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eigenes-profil',
  templateUrl: './eigenes-profil.component.html',
  styleUrls: ['./eigenes-profil.component.css']
})
export class EigenesProfilComponent implements OnInit {

  constructor(private userService: UserService, private auth: AuthTokenService) { }

  ngOnInit() {
    this.getUserName();
  }

  getUserName(){
    const eventsData = this.userService.getUserData().subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }


}
