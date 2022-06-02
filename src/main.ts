import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app/app-routing.module';
import { RouterModule } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule), importProvidersFrom(AppRoutingModule)],
}).catch(err => console.error(err));
