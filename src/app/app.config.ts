import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { pt_BR, provideNzI18n } from 'ng-zorro-antd/i18n';

import { routes } from './app.routes';
import { MessageService } from './shared/services/message/message.service';

registerLocaleData(pt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes
    ), 
    provideHttpClient(),
    importProvidersFrom(
      FormsModule
    ),
    provideAnimationsAsync(),

    provideNzI18n(
      pt_BR
    ),
    
    MessageService
  ]
};
