import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, TodoService } from '../todo.service';
import { CompleteStrikeThroughDirective } from '../complete-strike-through.directive';
import { RouterModule } from '@angular/router';
import { DateTimePipe } from '../date-time.pipe';

@Component({
  selector: 'app-view-todo',
  standalone: true,
  imports: [
    CompleteStrikeThroughDirective,
    DateTimePipe,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.scss'],
})
export class ViewTodoComponent implements OnInit {
  todos$ = this.todoService.todos$;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onToggleTodo(todo: Todo) {
    this.todoService.toggleTodo(todo);
  }

  trackByTodo(index: number, todo: Todo) {
    return todo.name;
  }
}
