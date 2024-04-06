import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ContadorComponent } from './contador/contador.component';
import { PadreComponent } from './padre/padre.component';
import { TodoListaComponent } from './todo-lista/todo-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComentariosComponent,ContadorComponent,PadreComponent,TodoListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto';
}
