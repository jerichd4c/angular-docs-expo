import { Component } from '@angular/core';
import { Codigo } from '../../components/codigo/codigo';

@Component({
  imports: [Codigo],
  selector: 'app-instalacion',
  styleUrl: './instalacion.css',
  templateUrl: './instalacion.html',
})
export class Instalacion {

  // requisitos 
  readonly codigoRequisitos = `node --version    # debe ser una 
versión LTS (par: 20, 22, 24...)
npm --version`;

  // comando de instalacion de framework
  readonly codigoCli = `npm install -g @angular/cli
ng version`;
  
  // requisitos para crear un projecto nuevo
  readonly codigoNuevo = `ng new angular-docs-expo --ssr --style=css
cd angular-docs-expo
ng serve`; 

  // estructura de instalacion
  readonly codigoEstructura = `angular-docs-expo/
├── public/                      ← archivos estáticos (favicon, imágenes)
├── src/
│   ├── app/
│   │   ├── components/          ← componentes reutilizables (demos)
│   │   ├── pages/               ← una página por ruta
│   │   ├── services/            ← servicios (estado global)
│   │   ├── app.ts               ← componente raíz
│   │   ├── app.html             ← plantilla raíz (menú + router-outlet)
│   │   ├── app.css              ← estilos del componente raíz
│   │   ├── app.routes.ts        ← definición de rutas
│   │   ├── app.config.ts        ← configuración global (providers)
│   │   ├── app.config.server.ts ← configuración extra para SSR
│   │   └── app.routes.server.ts ← modo de renderizado por ruta (SSR)
│   ├── index.html               ← único HTML de la aplicación
│   ├── main.ts                  ← punto de entrada en el navegador
│   ├── main.server.ts           ← punto de entrada en el servidor
│   ├── server.ts                ← servidor Express para SSR
│   └── styles.css               ← estilos globales
├── angular.json                 ← configuración del CLI y del build
├── package.json                 ← dependencias y scripts
├── tsconfig.json                ← configuración de TypeScript
└── .gitignore                   ← archivos que Git no sube`;

  // comado para iniciar el servidor de desarrollo
  readonly codigoComandos = `ng serve                          # servidor de desarrollo en localhost:4200
ng build                          # compila para producción en /dist
ng generate component nombre      # crea un componente (atajo: ng g c)
ng generate service nombre        # crea un servicio (atajo: ng g s)
ng test                           # ejecuta las pruebas unitarias`;
}
