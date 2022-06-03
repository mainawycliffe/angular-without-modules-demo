import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { BehaviorSubject } from 'rxjs';

export type Todo = {
  name: string;
  completed: boolean;
  completedOn?: string;
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [
    {
      name: 'Learn Angular',
      completed: true,
      completedOn: DateTime.now().minus({ day: 2 }).toISO(),
    },
    {
      name: 'Learn CSS',
      completed: true,
      completedOn: DateTime.now().minus({ hour: 3 }).toISO(),
    },
    {
      name: 'Talk About Angular without Modules',
      completed: false,
    },
    {
      name: 'Go to Google I/O Extended 2022',
      completed: false,
    },
    {
      name: 'Meet new people and network',
      completed: false,
    },
  ];

  todos$ = new BehaviorSubject<Todo[]>(this.todos);

  constructor() {}

  addTodo(todo: Todo) {
    this.todos = [...this.todos, todo];
    this.todos$.next(this.todos);
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.name !== todo.name);
    this.todos$.next(this.todos);
  }

  toggleTodo(todo: Todo) {
    this.todos = this.todos.map((t) => {
      // if it's the todo we want to toggle, toggle it
      if (t.name === todo.name) {
        return {
          ...t,
          completed: !t.completed,
          ...(!t.completed
            ? { completedOn: DateTime.now().toISO() }
            : // if toggle is removed, remove completedOn
              { completedOn: undefined }),
        };
      }
      // otherwise, leave it alone
      return t;
    });
    console.log(this.todos);
    this.todos$.next(this.todos);
  }
}
