import { Component, inject, input} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Codigo } from '../../components/codigo/codigo';

@Component({
  imports: [Codigo, RouterLink, RouterLinkActive],
  selector: 'app-routing',
  styleUrl: './routing.css',
  templateUrl: './routing.html',
})
export class Routing {
  private readonly router = inject(Router);

  // Demo de routing

  readonly framework = input<string>();

  readonly frameworks = ['angular', 'react', 'vue', 'svelte'];

  irAlAzar() {
    const elegido = this.frameworks[Math.floor(Math.random() * this.frameworks.length)];
    this.router.navigate(['/routing', elegido]);
  }

  irAEstado() {
    this.router.navigate(['/estado']);
  }

  // Codigo de ejemplos
  readonly codigoRutas = `// app.routes.ts
export const routes: Routes = [
  // Redirección: la raíz manda a /instalacion
  { path: '', redirectTo: 'instalacion', pathMatch: 'full' },

  // Ruta con carga diferida (lazy loading)
  {
    path: 'estado',
    title: 'Estado y reactividad',
    loadComponent: () => import('./pages/estado/estado').then(m => m.Estado)
  },

  // Ruta con parámetro
  { path: 'routing/:framework', loadComponent: () => import('./pages/routing/routing').then(m => m.Routing) },

  // Comodín: cualquier URL desconocida (siempre al final)
  { path: '**', redirectTo: 'instalacion' }
];`;

  readonly codigoPlantilla = `<!-- app.html -->
<nav>
  <a routerLink="/instalacion" routerLinkActive="activo">Instalación</a>
  <a routerLink="/estado" routerLinkActive="activo">Estado</a>
</nav>

<main>
  <router-outlet />   <!-- aquí se muestra la página de la ruta actual -->
</main>`;

  readonly codigoParametros = `// app.config.ts: los parámetros llegan como inputs
provideRouter(routes, withComponentInputBinding())

// routing.ts: el nombre del input = el nombre del parámetro
export class Routing {
  readonly framework = input<string>();
}

<!-- Enlace con parámetro -->
<a [routerLink]="['/routing', 'vue']">Vue</a>`;

  readonly codigoNavegar = `import { Router } from 
  '@angular/router';

export class Ejemplo {
  private readonly router = inject(Router);

  irAlAzar() {
    const elegido = this.frameworks[Math.floor(Math.random() * 
this.frameworks.length)];
  this.router.navigate(['/routing', elegido]);
  }
}`;

  readonly codigoGuard = `// Un guard decide si se puede entrar a una ruta
export const soloAdmin: CanActivateFn = () => {
  const auth = inject(AuthService);
  return auth.esAdmin() ? true : inject(Router).parseUrl('/login');
};

// Se aplica en la definición de la ruta
{ path: 'admin', canActivate: [soloAdmin], loadComponent: () => import('./admin/admin').then(m => m.Admin) }`;
}