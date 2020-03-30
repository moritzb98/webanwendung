import { TodoService } from './../Services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-overview',
  templateUrl: './to-do-overview.component.html',
  styleUrls: ['./to-do-overview.component.css']
})
export class ToDoOverviewComponent implements OnInit {

  todo = null;
  todos = [];
  private todoForm = {
    todoName: null,
    checked: null,
    userID: localStorage.getItem('id')
  };
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo() {
    this.todoForm.todoName = this.todo;
    this.todoForm.checked = false;
    this.todos.push(this.todo);
    this.todoService.createTodo(this.todoForm).subscribe(
      data => {
        console.log(data);
      }
    );
    this.todo = null;
  }

  check() {
    console.log('check');
  }
}
