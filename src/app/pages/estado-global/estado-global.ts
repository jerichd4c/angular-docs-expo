import { Component, inject } from '@angular/core';
import { Codigo } from '../../components/codigo/codigo';
import { IndicadorTema } from '../../components/indicador-tema/indicador-tema';
import { Tema } from '../../services/tema';

@Component({
  imports: [Codigo, IndicadorTema],
  selector: 'app-estado-global',
  styleUrl: './estado-global.css',
  templateUrl: './estado-global.html',
})
export class EstadoGlobal {

  // Demo de tema global
  protected readonly tema = inject(Tema);

  // Codigo de ejemplos
  readonly codigoProblema = `SIN estado global (prop drilling):
  App ──input──▶ Layout ──input──▶ Menú ──input──▶ Indicador
        (el dato pasa por componentes que no lo necesitan)

  CON un servicio:
                ┌───────── Servicio Tema ─────────┐
                ▼                                 ▼
            Indicador                          Página
        (cada componente lo inyecta directamente)`;

  readonly codigoServicio = `// services/tema.ts
  import { Injectable, signal } from '@angular/core';

  @Injectable({ providedIn: 'root' })   // una sola instancia para toda la app
  export class Tema {
    readonly oscuro = signal(false);

    alternar() {
      this.oscuro.update(valor => !valor);
    }
  }`;

  readonly codigoInject = `// components/indicador-tema.ts: modifica el estado
  export class IndicadorTema {
    protected readonly tema = inject(Tema);
  }
  <span (click)="tema.alternar()">{{ tema.oscuro() ? '🌙' : '☀️' }}</span>

  // app.ts: lee el mismo estado para cambiar los colores de toda la app
  export class App {
    protected readonly tema = inject(Tema);
  }
  <div class="layout" [class.oscuro]="tema.oscuro()">`;

  readonly codigoBuenaPractica = `@Injectable({ providedIn: 'root' })
export class Carrito {
  // Privado: solo el servicio puede modificarlo
  private readonly _productos = signal<Producto[]>([]);

  // Público de solo lectura: los componentes lo leen pero no lo cambian
  readonly productos = this._productos.asReadonly();
  readonly cantidad = computed(() => this._productos().length);
  readonly total = computed(() =>
    this._productos().reduce((suma, p) => suma + p.precio, 0)
  );

  // La única forma de cambiar el estado: métodos con nombre claro
  agregar(producto: Producto) {
    this._productos.update(lista => [...lista, producto]);
  }

  vaciar() {
    this._productos.set([]);
  }
}`;

  readonly codigoNgrx = `import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';

export const CarritoStore = signalStore(
  { providedIn: 'root' },
  withState({ productos: [] as Producto[] }),
  withComputed(({ productos }) => ({
    cantidad: computed(() => productos().length)
  })),
  withMethods(store => ({
    agregar(producto: Producto) {
      patchState(store, {  productos: [...store.productos(), producto] });
    }
  }))
);`;
}