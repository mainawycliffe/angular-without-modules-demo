import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private todos: TodoService) { }

  ngOnInit(): void {
  }

  onSubmit(todo: Todo) {
    this.todos.addTodo(todo)
  }

}
