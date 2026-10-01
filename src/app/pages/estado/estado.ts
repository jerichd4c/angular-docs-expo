import { Component, computed, effect, inject, signal} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Codigo } from '../../components/codigo/codigo';
import { MeGusta } from '../../components/me-gusta/me-gusta';

@Component({
  imports: [Codigo, MeGusta],
  selector: 'app-estado',
  styleUrl: './estado.css',
  templateUrl: './estado.html',
})
export class Estado {
  private readonly titulo = inject(Title);
  
  // Demo de me gusta
  readonly totalLikes = signal(0);

  readonly resumen = computed(() =>
    this.totalLikes() === 0 ? 'Nadie ha dado me gusta' : 'Total de me gusta: ' + this.totalLikes()
  );

  constructor() {
    // Cada vez que cambia totalLikes, se actualiza el título de la pestaña
    effect(() => {
      this.titulo.setTitle('❤️ ' + this.totalLikes() + ' me gusta');
    });
  }

  alCambiar(activo: boolean) {
    this.totalLikes.update(total => activo ? total + 1 : total - 1);
  }

  // Codigo de ejemplos
  readonly codigoFlujo = `signal cambia  ──▶  Angular sabe quién lo usa  ──▶  actualiza solo eso
                    (plantillas, computed, effects)`;

  readonly codigoSignal = `import { signal } from '@angular/core';

const contador = signal(0);           // crear con valor inicial
console.log(contador());              // leer → 0
contador.set(5);                      // reemplazar el valor
contador.update(valor => valor + 1);  // calcular a partir del anterior → 6

// Con arreglos u objetos se crea uno nuevo (no se usa push)
const tareas = signal<string[]>([]);
tareas.update(lista => [...lista, 'Nueva tarea']);`;

  readonly codigoComputed = `import { signal, computed } from '@angular/core';

const precio = signal(100);
const cantidad = signal(3);

// Se recalcula solo cuando cambia precio o cantidad
const total = computed(() => precio() * cantidad());

total();        // 300
cantidad.set(5);
total();        // 500`;

  readonly codigoEffect = `import { Component, effect, signal } from '@angular/core';

export class Ejemplo {
  readonly tema = signal('claro');

  constructor() {
    // Se ejecuta al inicio y cada vez que "tema" cambia
    effect(() => {
      console.log('El tema ahora es: ' + this.tema());
    });
  }
}`;

  readonly codigoDemo = `readonly totalLikes = signal(0);

readonly resumen = computed(() =>
  this.totalLikes() === 0 ? 'Nadie ha dado me gusta' : 'Total: ' + this.totalLikes()
);

constructor() {
  effect(() => {
    this.titulo.setTitle('❤️ ' + this.totalLikes() + ' me gusta');
  });
}

alCambiar(activo: boolean) {
  this.totalLikes.update(total => activo ? total + 1 : total - 1);
}`;
}