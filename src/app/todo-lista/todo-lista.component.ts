import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../tarea';
import { TareaServiceService } from '../tarea-service.service'; 

@Component({
  selector: 'app-todo-lista',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-lista.component.html',
  styleUrl: './todo-lista.component.css'
})
export class TodoListaComponent {
  tarea?: string
  lista: Tarea[] = []
  contador: number = 0
  username: string = '';
  value?: any
  statusInput: boolean = true;

  constructor(private todoService: TareaServiceService) {}

  ngOnInit() {
    this.lista = this.todoService.getTodoList();
    this.contador = this.lista.length;
    this.username = this.todoService.getUsername();
    if(this.username == ''){
      this.value = prompt('Por favor, ingrese su nombre de usuario:')
      this.todoService.setUsername(this.value);
      this.username = this.value;
    }
  }
  verificar(){
    if(this.tarea != ''){
      this.statusInput = false
    }
  }
  agregarTarea(){
    this.contador++
    const nuevaTarea: Tarea = {
      id: this.contador,
      tarea: this.tarea || ''
    };
    this.lista.push(nuevaTarea);

    this.todoService.saveTodoList(this.lista);
    this.tarea = '';
    this.statusInput = true
  }

  eliminarTarea(id: number) {
    this.lista = this.lista.filter(tarea => tarea.id !== id);
    this.todoService.saveTodoList(this.lista);
  }

  trackByFn(index: number, tarea: Tarea): number {
    return tarea.id;
  }

  borrarData() {
    this.todoService.setUsername(''); 
    this.todoService.saveTodoList([]); 
    this.username = ''; 
    this.lista = []; 
    window.location.reload();
  }

}
