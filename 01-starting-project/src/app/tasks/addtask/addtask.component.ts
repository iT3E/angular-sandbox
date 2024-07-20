import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type Task } from '../task/task.model';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css',
})
export class AddtaskComponent {
  @Output() addTask = new EventEmitter<Task>();

  newTask: Task = {
    id: '',
    userId: '',
    title: '',
    summary: '',
    dueDate: '',
  };

  onAddTask() {
    // Generate a unique ID for the new task
    this.newTask.id = 'task_' + Math.random();

    // Emit the new task object to the parent component
    this.addTask.emit(this.newTask);

    // Reset the newTask object to clear the form
    this.newTask = {
      id: '',
      userId: '',
      title: '',
      summary: '',
      dueDate: '',
    };
  }
}
