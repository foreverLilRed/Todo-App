import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  mensaje: string = "Mensaje desde padre"
  recibido: string = ''
  tipado: string = ''

  recibirMensaje($event: string){
    this.recibido = $event
  }

  recibirTipado($event: string){
    this.tipado = $event
  }
}
