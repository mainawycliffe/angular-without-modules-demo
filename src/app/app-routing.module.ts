import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTodoComponent } from './view-todo/view-todo.component';

const routes: Routes = [
  {
    path: "",
    component: ViewTodoComponent
  },
  {
    // lazy loading a standalone component
    path: "add",
    loadComponent: () => import('./add-todo/add-todo.component').then(c => c.AddTodoComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
