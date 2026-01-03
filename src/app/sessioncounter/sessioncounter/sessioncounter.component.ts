import { Component } from '@angular/core';

@Component({
  selector: 'app-sessioncounter',
  templateUrl: './sessioncounter.component.html',
  styleUrl: './sessioncounter.component.css'
})
export class SessioncounterComponent {

  public estadoInicial: number = 0;

  iniciarSesion(valor: number): void {
    this.estadoInicial += valor;
  }

  cerrarSesion(valor: number): void {

    if(this.estadoInicial < 1) {
      this.estadoInicial = 0;
      return;
    }

    this.estadoInicial -= valor;
  }

  reset(): void {
    this.estadoInicial = 0;
  }

}
