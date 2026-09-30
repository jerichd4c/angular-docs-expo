import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { IndicadorTema } from './components/indicador-tema/indicador-tema';
import { Tema } from './services/tema';
@Component({
  imports: [RouterOutlet, RouterLinkActive, RouterLink, IndicadorTema],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 protected readonly tema = inject(Tema);
}
