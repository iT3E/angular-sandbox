import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type AddTaskData } from '../task/task.model';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css',
})
export class AddtaskComponent {
  @Output() stopaddingtask = new EventEmitter<void>();
  @Output() addtask = new EventEmitter<AddTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onStopAddingTask() {
    this.stopaddingtask.emit();
  }
  onSubmit() {
    this.addtask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
