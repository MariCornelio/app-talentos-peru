import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import MyPreset from './mypreset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: false,
        },
      },
      translation: {
        accept: 'Aceptar',
        reject: 'Rechazar',
        choose: 'Elegir',
        upload: 'Subir',
        cancel: 'Cancelar',
        clear: 'Limpiar',
        apply: 'Aplicar',
        emptyFilterMessage: 'No se encontraron resultados',
        emptyMessage: 'No se encontraron resultados',
        selectionMessage: '{0} elementos seleccionados',
        emptySelectionMessage: 'Ningún elemento seleccionado',
        dateFormat: 'dd/mm/yy',
        dateIs: 'La fecha es',
        dateIsNot: 'La fecha no es',
        dateBefore: 'La fecha es anterior a',
        dateAfter: 'La fecha es posterior a',
        noFilter: 'Sin filtro',
        today: 'Hoy',
      },
    }),
  ],
};
