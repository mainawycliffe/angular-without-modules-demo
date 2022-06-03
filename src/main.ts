import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { ViewTodoComponent } from './app/view-todo/view-todo.component';

const routes: Routes = [
  {
    path: '',
    component: ViewTodoComponent,
  },
  {
    // lazy loading a standalone component
    path: 'add',
    loadComponent: () =>
      import('./app/add-todo/add-todo.component').then(
        (c) => c.AddTodoComponent
      ),
    title: 'Add Todo',
  },
];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))],
}).catch((err) => console.error(err));
