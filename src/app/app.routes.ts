import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'instalacion', pathMatch: 'full' },

  {
    path: 'instalacion',
    title: 'Instalación y estructura',
    loadComponent: () => import('./pages/instalacion/instalacion').then(m => m.Instalacion)
  },
  {
    path: 'componentes',
    title: 'Componentes y sintaxis base',
    loadComponent: () => import('./pages/componentes/componentes').then(m => m.Componentes)
  },
  {
    path: 'comunicacion',
    title: 'Props y comunicación',
    loadComponent: () => import('./pages/comunicacion/comunicacion').then(m => m.Comunicacion)
  },
  {
    path: 'estado',
    title: 'Estado y reactividad',
    loadComponent: () => import('./pages/estado/estado').then(m => m.Estado)
  },
  {
    path: 'ciclo-de-vida',
    title: 'Ciclo de vida',
    loadComponent: () => import('./pages/ciclo-de-vida/ciclo-de-vida').then(m => m.CicloDeVida)
  },
  {
    path: 'routing',
    title: 'Routing y navegación',
    loadComponent: () => import('./pages/routing/routing').then(m => m.Routing)
  },
  {
    path: 'apis',
    title: 'Consumo de APIs',
    loadComponent: () => import('./pages/apis/apis').then(m => m.Apis)
  },
  {
    path: 'estado-global',
    title: 'Estado global',
    loadComponent: () => import('./pages/estado-global/estado-global').then(m => m.EstadoGlobal)
  },
  {
    path: 'ecosistema',
    title: 'Ecosistema y rendimiento',
    loadComponent: () => import('./pages/ecosistema/ecosistema').then(m => m.Ecosistema)
  },
  {
    path: 'ssr',
    title: 'SSR',
    loadComponent: () => import('./pages/ssr/ssr').then(m => m.Ssr)
  },

  { path: '**', redirectTo: 'instalacion' }
];