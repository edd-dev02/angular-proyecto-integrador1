import { Component } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {

  public tareas: string[] = [
    "Tender la cama al despertar",
    "Bañarse y asearse",
    "Preparar o desayunar algo saludable",
    "Revisar mensajes y correos importantes",
    "Limpiar o acomodar el área de trabajo/estudio",
    "Realizar alguna actividad física (caminar, gym, estiramientos)",
    "Avanzar en una tarea de estudio o trabajo",
    "Comer de forma balanceada",
    "Lavar platos o recoger la cocina",
    "Preparar lo necesario para el día siguiente (ropa, mochila, pendientes)",
  ];

  public tareaEliminada?: string;

  eliminarTarea(): void {

    console.log("Iniciando método...");

    this.tareaEliminada = this.tareas.shift();

  }

}
