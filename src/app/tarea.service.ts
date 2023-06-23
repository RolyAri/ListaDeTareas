import { Injectable } from '@angular/core';
import { Tarea } from './tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor() { }
  private tareas: Tarea[] = [];

  getTareas(): Tarea[] {
    return this.tareas;
  }

  addTarea(nombreTarea: string) {
    const tarea = new Tarea(nombreTarea);
    this.tareas.push(tarea);
  }

  removeTarea(tarea: Tarea) {
    const index = this.tareas.indexOf(tarea);
    if (index > -1) {
      this.tareas.splice(index, 1);
    }
  }
}
