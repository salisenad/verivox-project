import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

console.log(`%cDeveloped by: Senad Sali`, `color: red; font-weight: bold; font-size: 30px`);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
