import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {

  public totalUsers: number = 150;
  public activeUsers: number = 60;

  get usuariosActivos(): number {
    return (this.activeUsers / this.totalUsers) * 100;
  }

  public activarUsuario(): void {
    if(this.activeUsers < this.totalUsers) this.activeUsers++;
  }

  public desactivarUsuario(): void {
    if(this.activeUsers > 0) this.activeUsers--;
  }

}
