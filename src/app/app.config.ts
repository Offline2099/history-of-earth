import { ApplicationConfig, provideZoneChangeDetection, provideAppInitializer, inject } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { DivisionType } from './constants/division-type';
import { DescriptionService } from './services/description.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideAppInitializer(() => {
      const descriptionService = inject(DescriptionService);
      return firstValueFrom(
        descriptionService.fetchDescriptions(DivisionType.eon)
      );
    })
  ]
};
