import { Component } from '@angular/core';
import { Codigo } from '../../components/codigo/codigo';
import { FraseAleatoria } from '../../components/frase-aleatoria/frase-aleatoria';
import { Reloj } from '../../components/reloj/reloj';

@Component({
  imports: [Codigo, FraseAleatoria, Reloj],
  selector: 'app-ecosistema',
  styleUrl: './ecosistema.css',
  templateUrl: './ecosistema.html',
})
export class Ecosistema {

  // Codigo de ejemplos

  readonly codigoHerramientas = `ng add @angular/material     # instala y configura una librería en un paso
ng update                    # actualiza Angular a la siguiente versión
ng generate component x      # genera código siguiendo las convenciones
ng build                     # compila y optimiza para producción (esbuild + Vite)`;

  readonly codigoMaterial = `// Después de: ng add @angular/material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './perfil.html'
})
export class Perfil {}

<!-- perfil.html -->
<mat-card>
  <mat-card-title>Perfil</mat-card-title>
  <button mat-flat-button>Guardar</button>
</mat-card>`;

  readonly codigoDefer = `@defer (on interaction) {
  <app-frase-aleatoria />            <!-- se descarga al hacer clic -->
} @placeholder {
  <span>Haz clic para cargar</span>  <!-- se muestra antes -->
} @loading (minimum 500ms) {
  <span>Cargando componente...</span> <!-- mientras se descarga -->
}

@defer (on timer(3s)) {
  <app-reloj />                       <!-- se descarga a los 3 segundos -->
} @placeholder {
  <span>El reloj aparecerá en 3 segundos...</span>
}

<!-- Otros disparadores: on viewport, on hover, on idle, when condicion -->`;

  readonly codigoZoneless = `// Angular moderno no necesita zone.js: los signals avisan qué cambió
// (es el comportamiento por defecto en los proyectos nuevos)
export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes)
  ]
};`;

  readonly codigoImagenes = `import { NgOptimizedImage } from '@angular/common';

@Component({ imports: [NgOptimizedImage] })

<!-- ngSrc en lugar de src: carga diferida, tamaños correctos y prioridad -->
<img ngSrc="portada.jpg" width="800" height="400" priority />
<img ngSrc="foto.jpg" width="200" height="200" />   <!-- lazy por defecto -->`;
}
