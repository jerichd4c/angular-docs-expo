import { Component, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Codigo } from '../../components/codigo/codigo';
import { FraseAleatoria } from '../../components/frase-aleatoria/frase-aleatoria';

interface Usuario {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}

@Component({
  imports: [Codigo, FraseAleatoria],
  selector: 'app-apis',
  styleUrl: './apis.css',
  templateUrl: './apis.html',
})
export class Apis {

  // Demo de buscador de usuarios

  readonly usuarioId = signal(1);

  readonly usuario = httpResource<Usuario>(() => 
'https://dummyjson.com/users/' + this.usuarioId());

anterior() {
    this.usuarioId.update(id => Math.max(1, id - 1));
  }

siguiente() {
    this.usuarioId.update(id => id + 1);
  }

provocarError() {
    this.usuarioId.set(99999);
  }

// Codigo de ejemplos
readonly codigoConfig = `// app.config.ts
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch())   // habilita las peticiones HTTP
  ]
};`;

  readonly codigoHttpClient = `import { HttpClient } from '@angular/common/http';

export class Productos {
  private readonly http = inject(HttpClient);
  readonly productos = signal<Producto[]>([]);

  ngOnInit() {
    // GET: devuelve un Observable; la petición se hace al suscribirse
    this.http.get<Producto[]>('https://api.ejemplo.com/productos')
      .subscribe(datos => this.productos.set(datos));
  }

  crear(nuevo: Producto) {
    // POST: enviar datos al servidor
    this.http.post<Producto>('https://api.ejemplo.com/productos', nuevo)
      .subscribe(creado => console.log('Creado con id ' + creado.id));
  }
}`;

  readonly codigoHttpResource = `import { httpResource } from '@angular/common/http';

export class Apis {
  readonly usuarioId = signal(1);

  // Se ejecuta al inicio y se repite sola cada vez que cambia usuarioId
  readonly usuario = httpResource<Usuario>(
    () => 'https://dummyjson.com/users/' + this.usuarioId()
  );

  siguiente() {
    this.usuarioId.update(id => id + 1);   // esto dispara una nueva petición
  }
}`;

  readonly codigoEstados = `@if (usuario.isLoading()) {
  <span>Cargando...</span>
} @else if (usuario.error()) {
  <span>❌ No se encontró el usuario</span>
} @else if (usuario.hasValue()) {
  <img [src]="usuario.value().image" alt="" />
  <strong>{{ usuario.value().firstName }} {{ usuario.value().lastName }}</strong>
}`;

  readonly codigoInterceptor = `// Un interceptor modifica TODAS las peticiones (por ejemplo, para agregar un token)
export const authInterceptor: HttpInterceptorFn = (peticion, siguiente) => {
  const conToken = peticion.clone({
    setHeaders: { Authorization: 'Bearer ' + obtenerToken() }
  });
  return siguiente(conToken);
};

// app.config.ts
provideHttpClient(withFetch(), withInterceptors([authInterceptor]))`;
}