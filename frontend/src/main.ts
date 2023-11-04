import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';
import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';



bootstrapApplication(AppComponent)
.catch(err => console.error(err));
