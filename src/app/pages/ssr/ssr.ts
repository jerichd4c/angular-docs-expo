import { Component, PLATFORM_ID, TransferState, afterNextRender, inject, makeStateKey, signal} from '@angular/core';
import { Codigo } from '../../components/codigo/codigo';
import { isPlatformBrowser } from '@angular/common';

const CLAVE_FECHA = makeStateKey<string>('fechaServidor');

@Component({
  imports: [Codigo],
  selector: 'app-ssr',
  styleUrl: './ssr.css',
  templateUrl: './ssr.html',
})
export class Ssr {
  private readonly estado = inject(TransferState);
  private readonly enNavegador =
isPlatformBrowser(inject(PLATFORM_ID));

  // Demo

  readonly fechaServidor: string;
  readonly fechaNavegador = signal<string | null>(null);

  constructor() {
    // En el servidor: guarda la fecha para enviársela al navegador dentro del HTML
    if (!this.enNavegador) {
      this.estado.set(CLAVE_FECHA, new Date().toLocaleString());
    }

    // En el servidor y en el navegador: lee la fecha que generó el servidor
    this.fechaServidor = this.estado.get(CLAVE_FECHA, 'No disponible: esta vista se generó solo en el navegador');

    // Solo en el navegador: momento en que Angular tomó el control (hidratación)
    afterNextRender(() => {
      this.fechaNavegador.set(new Date().toLocaleString());
    });
  }

  // Codigo de ejemplos
  readonly codigoComparacion = `CSR (renderizado en el cliente, sin SSR):
1. El navegador pide la página
2. Recibe un HTML vacío: <app-root></app-root>      ← pantalla en blanco
3. Descarga y ejecuta el JavaScript de Angular
4. Angular dibuja el contenido                     ← recién aquí se ve algo

SSR (renderizado en el servidor):
1. El navegador pide la página
2. El servidor ejecuta Angular y responde con el HTML completo  ← ya se ve todo
3. El navegador descarga el JavaScript
4. Hidratación: Angular conecta los eventos al HTML existente   ← ya es interactiva`;

  readonly codigoArchivos = `ng new mi-app --ssr          # o en un proyecto existente: ng add @angular/ssr

src/
├── main.server.ts           ← punto de entrada en el servidor
├── server.ts                ← servidor Express que ejecuta Angular
└── app/
    ├── app.config.server.ts ← configuración extra para el servidor
    └── app.routes.server.ts ← modo de renderizado de cada ruta`;

  readonly codigoModos = `// app.routes.server.ts
export const serverRoutes: ServerRoute[] = [
  // Prerender (SSG): el HTML se genera UNA vez al compilar (ng build)
  { path: 'instalacion', renderMode: RenderMode.Prerender },

  // Server (SSR): el HTML se genera en CADA petición (datos que cambian)
  { path: 'perfil/:id', renderMode: RenderMode.Server },

  // Client (CSR): sin SSR, el navegador lo dibuja todo
  { path: 'admin', renderMode: RenderMode.Client },

  { path: '**', renderMode: RenderMode.Prerender }
];`;

  readonly codigoHidratacion = `// app.config.ts
provideClientHydration(
  withEventReplay(),          // repite los clics hechos antes de que cargue el JS
  withIncrementalHydration()  // permite hidratar partes de la página por separado
)

<!-- Hidratación incremental: esta parte se vuelve interactiva al verse en pantalla -->
@defer (hydrate on viewport) {
  <app-comentarios />
}`;

  readonly codigoNavegador = `// ❌ Error en el servidor: allí no existen window, document ni localStorage
ngOnInit() {
  const tema = localStorage.getItem('tema');
}

// ✅ afterNextRender solo se ejecuta en el navegador
constructor() {
  afterNextRender(() => {
    const tema = localStorage.getItem('tema');
  });
}

// ✅ O preguntar en qué plataforma se está ejecutando
const enNavegador = isPlatformBrowser(inject(PLATFORM_ID));`;

  readonly codigoDemo = `const CLAVE_FECHA = makeStateKey<string>('fechaServidor');

  constructor() {
  if (!this.enNavegador) {
    // Servidor: guarda la fecha; viaja al navegador dentro del HTML
    this.estado.set(CLAVE_FECHA, new Date().toLocaleString());
  }
  this.fechaServidor = this.estado.get(CLAVE_FECHA, 'No disponible');

  afterNextRender(() => {
    // Navegador: momento de la hidratación
    this.fechaNavegador.set(new Date().toLocaleString());
  });
}`;

  readonly codigoProduccion = `ng build                                   # compila y prerenderiza las rutas
npm run serve:ssr:angular-docs-expo        # ejecuta el servidor de producción`;
}