import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() mensajeHijo?: string

  @Input() mensaje?: string

  @Output() enviarPadre = new EventEmitter<string>();
  @Output() enviarTipado = new EventEmitter<string>();

  enviarMensaje(){
    this.enviarPadre.emit("Enviado desde padre")
  }

  enviarMensajeTipado(){
    this.enviarTipado.emit(this.mensaje)
  }

}
