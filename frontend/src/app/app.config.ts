import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { APP_INITIALIZER } from '@angular/core';

function initializeApp() {
  return new Promise<void>((resolve) => {
    console.log('Application initialized');
    setTimeout(() => {
      console.log('Initialization tasks complete');
      resolve();
    }, 2000);
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeApp, // Reference to the function that returns a Promise
      multi: true
    }
  ],
};
