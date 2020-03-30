import { TodoService } from './../Services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-overview',
  templateUrl: './to-do-overview.component.html',
  styleUrls: ['./to-do-overview.component.css']
})
export class ToDoOverviewComponent implements OnInit {

  todo = null;
  todos: any = [];
  todosAdded: any = [];
  private todoForm = {
    todoName: null,
    checked: null,
    userID: localStorage.getItem('id')
  };
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  addTodo() {
    this.todoForm.todoName = this.todo;
    this.todoForm.checked = false;
    this.todoService.createTodo(this.todoForm).subscribe(
      data => {
        this.todosAdded.push(data.todoName);
        this.todo = null;
        location.reload();
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
