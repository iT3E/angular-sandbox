import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css',
})
export class AddtaskComponent {
  @Output() stopaddingtask = new EventEmitter<boolean>();

  onStopAddingTask() {
    this.stopaddingtask.emit(false);
  }
}
