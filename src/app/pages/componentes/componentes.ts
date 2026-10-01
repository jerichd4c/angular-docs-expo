import { Component, signal} from '@angular/core';
import { Codigo } from '../../components/codigo/codigo';
import { Etiqueta } from '../../components/etiqueta/etiqueta';


@Component({
  imports: [Codigo, Etiqueta],
  selector: 'app-componentes',
  styleUrl: './componentes.css',
  templateUrl: './componentes.html',
})
export class Componentes {
   readonly frameworks = [
    { nombre: 'Angular', color: '#dd0031' },
    { nombre: 'React', color: '#0a7ea4' },
    { nombre: 'Vue', color: '#42b883' },
    { nombre: 'Svelte', color: '#ff3e00' }
  ];

  readonly seleccionado = signal<string | null>(null);

  seleccionar(nombre: string) {
    this.seleccionado.set(nombre);
  }

  // Codigo de componente inicial
  readonly codigoComponente = `import { Component } from 
'@angular/core';

@Component({
  selector: 'app-saludo',          // etiqueta HTML para usarlo: <app-saludo />
  imports: [],                     // otros componentes que usa su plantilla
  templateUrl: './saludo.html',    // su HTML
  styleUrl: './saludo.css'         // su CSS (solo afecta a este componente)
})
export class Saludo {
  nombre = 'URU';                  // datos que usa la plantilla
`;

  // Codigo de property binding
  readonly codigoBindings = `<!-- Interpolación: mostrar datos -->
<p>Hola, {{ nombre }}</p>
<p>2 + 2 = {{ 2 + 2 }}</p>

<!-- Property binding: asignar propiedades de un elemento -->
<img [src]="urlFoto" />
<button [disabled]="cargando">Enviar</button>

<!-- Event binding: reaccionar a eventos -->
<button (click)="guardar()">Guardar</button>
<input (input)="alEscribir($event)" />`;

  // Codigo diferencia entre if for y switch
  readonly codigoControl = `@if (usuario) {
  <p>Bienvenido, {{ usuario.nombre }}</p>
} @else {
  <p>Inicia sesión</p>
}

@for (producto of productos; track producto.id) {
  <li>{{ producto.nombre }}</li>
} @empty {
  <li>No hay productos</li>
}

@switch (rol) {
  @case ('admin') { <p>Panel de administrador</p> }
  @default { <p>Panel de usuario</p> }
}`;

  // Codigo ejemplo etiquetas
  readonly codigoDemo = `@for (fw of frameworks; track fw.nombre) {
  <app-etiqueta
    [texto]="fw.nombre"
    [color]="fw.color"
    (click)="seleccionar(fw.nombre)" />
}

@if (seleccionado()) {
  <p>Elegiste: {{ seleccionado() }}</p>
} @else {
  <p>Haz clic en una etiqueta</p>
}`;
}
