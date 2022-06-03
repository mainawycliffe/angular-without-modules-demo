import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Todo = {
  name: string;
  completed: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    {
      "name": "Learn Angular",
      "completed": true
    },
    {
      name: "Learn CSS",
      completed: true
    },
    {
      name: "Talk About Angular without Modules",
      completed: false
    },
    {
      name: "Go to Google I/O Extended 2022",
      completed: false,
    },
    {
      name: "Meet new people and network",
      completed: false,
    }
  ]

  todos$ = new BehaviorSubject<Todo[]>(this.todos)

  constructor() {}

  addTodo(todo: Todo) {
    this.todos = [
      ...this.todos,
      todo
    ]
    this.todos$.next(this.todos)
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.name !== todo.name)
    this.todos$.next(this.todos)
  }

  toggleTodo(todo: Todo) {
    this.todos = this.todos.map(t => {
      // if it's the todo we want to toggle, toggle it
      if (t.name === todo.name) {
        return {
          ...t,
          completed: !t.completed
        }
      }
      // otherwise, leave it alone
      return t
    })
    this.todos$.next(this.todos)
  }
}
