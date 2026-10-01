import { Component, signal } from '@angular/core';
import { Codigo } from '../../components/codigo/codigo';
import { Reloj } from '../../components/reloj/reloj';

@Component({
  imports: [Codigo, Reloj],
  selector: 'app-ciclo-de-vida',
  styleUrl: './ciclo-de-vida.css',
  templateUrl: './ciclo-de-vida.html',
})
export class CicloDeVida {
  // Demo de reloj
  readonly mostrarReloj = signal(true);

  alternarReloj() {
    this.mostrarReloj.update(valor => !valor);
  }

  // Codigo de ejemplos
  readonly codigoOrden = `constructor()       → se crea la clase (los inputs todavía no tienen valor)
ngOnChanges()       → cambió algún input (antes de ngOnInit y cada vez que cambie)
ngOnInit()          → los inputs ya tienen valor: momento de inicializar
ngAfterViewInit()   → el HTML del componente ya fue creado
afterNextRender()   → ya se dibujó en el navegador (no se ejecuta en el servidor)
ngOnDestroy()       → el componente se va a eliminar: momento de limpiar`;

  readonly codigoHooks = `import { Component, OnDestroy, OnInit, input } from '@angular/core';

export class Perfil implements OnInit, OnDestroy {
  readonly usuarioId = input.required<number>();

  constructor() {
    // Aquí usuarioId() todavía NO tiene valor
  }

  ngOnInit() {
    // Ahora sí: cargar datos, iniciar procesos
    console.log('Cargando usuario ' + this.usuarioId());
  }

  ngOnDestroy() {
    // Detener intervalos, cancelar suscripciones, liberar recursos
    console.log('Perfil eliminado');
  }
}`;

  readonly codigoRender = `import { Component, afterNextRender, afterEveryRender } from '@angular/core';

export class Grafico {
  constructor() {
    // Una sola vez, después del primer dibujado en el navegador
    afterNextRender(() => {
      console.log('Ya puedo medir elementos o usar window/document');
    });

    // Después de CADA actualización de la vista
    afterEveryRender(() => {
      console.log('La vista se volvió a dibujar');
    });
  }
}`; 

  readonly codigoDestroyRef = `import { Component, DestroyRef, inject } from '@angular/core';

export class Ejemplo {
  constructor() {
    const intervalo = setInterval(() => console.log('tic'), 1000);

    // Alternativa moderna a ngOnDestroy: registrar la limpieza donde se crea el recurso
    inject(DestroyRef).onDestroy(() => clearInterval(intervalo));
  }
}`; 

  readonly codigoReloj = `export class Reloj implements OnInit, OnDestroy {
  readonly hora = signal('');
  private intervalo?: ReturnType<typeof setInterval>;

  constructor() {
    afterNextRender(() => {
      this.intervalo = setInterval(() => this.actualizar(), 1000);
      console.log('Reloj: afterNextRender → intervalo iniciado');
    });
  }

  ngOnInit() {
    this.actualizar();
    console.log('Reloj: ngOnInit → componente creado');
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
    console.log('Reloj: ngOnDestroy → intervalo limpiado');
  }

  private actualizar() {
    this.hora.set(new Date().toLocaleTimeString());
  }
}`;
}
