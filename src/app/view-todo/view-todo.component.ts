import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-view-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.scss']
})
export class ViewTodoComponent implements OnInit {

  todos$ = this.todoService.todos$;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onToggleTodo(todo: Todo) {
    this.todoService.toggleTodo(todo)
  }

  trackByTodo(index: number, todo: Todo) {
    return todo.name;
  }

}
