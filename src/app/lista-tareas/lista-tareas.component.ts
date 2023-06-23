import { Component } from '@angular/core';
import { Tarea } from '../tarea.model';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {
  tasks: Tarea[];
  taskName!: string;
  constructor(private tareaService: TareaService) {
    this.tasks = tareaService.getTareas();
  }

  addTask(taskName: string) {
    this.tareaService.addTarea(taskName);
  }

  removeTask(task: Tarea) {
    this.tareaService.removeTarea(task);
  }
}
