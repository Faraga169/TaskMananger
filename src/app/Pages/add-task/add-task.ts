import { Component } from '@angular/core';
import { TaskInputComponent } from '../../Components/task-input-component/task-input-component';
import { ITaskBase } from '../../Interface/ITaskBase';

@Component({
  selector: 'app-add-task',
  imports: [TaskInputComponent],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
}
