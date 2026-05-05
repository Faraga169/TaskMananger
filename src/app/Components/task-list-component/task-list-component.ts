import {
  Component,
  EventEmitter,
  input,
  Input,
  OnChanges,
  Output,
  output,
  SimpleChanges,
} from '@angular/core';
import { AllTasksComponent } from '../all-tasks-component/all-tasks-component';
import { DoneTasksComponent } from '../done-tasks-component/done-tasks-component';
import { NotDoneTasksComponent } from '../not-done-tasks-component/not-done-tasks-component';
import { ITaskBase, Status } from '../../Interface/ITaskBase';

@Component({
  selector: 'app-task-list-component',
  imports: [AllTasksComponent, DoneTasksComponent, NotDoneTasksComponent],
  templateUrl: './task-list-component.html',
  styleUrl: './task-list-component.css',
})
export class TaskListComponent {

  name: string = 'All Tasks';
  getName(elem: any) {
    let element = elem.target as HTMLButtonElement;
    this.name = element.innerText;
  }

}
