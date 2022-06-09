import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  router = inject(Router);

  formModel: Todo = {
    completed: false,
    name: '',
  };

  constructor(private todos: TodoService) {}

  ngOnInit(): void {}

  onSubmit(todo: Todo) {
    console.log(todo);
    this.todos.addTodo(todo);
    this.router.navigateByUrl('/');
  }
}
