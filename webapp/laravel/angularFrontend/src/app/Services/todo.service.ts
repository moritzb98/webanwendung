import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  createTodo(data) {
    return this.http.post('http://localhost/api/createTodo', data);
  }

  getTodos() {
    const id = localStorage.getItem('id');
    return this.http.get('http://localhost/api/todos/' + id);
  }

  delete(id) {
    return this.http.post('http://localhost/api/deleteTodo', id);
  }
}
