import { EventService } from './../Services/event.service';
import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Services/todo.service';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})
export class StartseiteComponent implements OnInit {
  public users: any = [];
  public events: any = [];
  todo = null;
  todos: any = [];
  todosAdded: any = [];

  constructor(private userService: UserService, private eventService: EventService, private todoService: TodoService) { }

  ngOnInit() {
    this.getUsers();
    this.getEvents();
    this.getTodos();
  }

  getUsers() {
    const userData = this.userService.getUsers().subscribe(
      data => {
        this.users = data.users;
      },
      err => {
        console.log(err);
      }
    );
  }

  getUser(id) {
    localStorage.setItem('userID', id);
  }

  getEvents() {
    const eventsData = this.eventService.getEvents().subscribe(
      data => {
        this.events = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  check(id, index) {
    this.todos[index].checked = true;
    const checkTodo = this.todoService.delete(id).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  getTodos() {
    const todoData = this.todoService.getTodos().subscribe(
      data => {
        this.todos = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
