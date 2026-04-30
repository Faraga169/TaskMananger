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
import { ITask, Status } from '../../Interface/ITask';

@Component({
  selector: 'app-task-list-component',
  imports: [AllTasksComponent, DoneTasksComponent, NotDoneTasksComponent],
  templateUrl: './task-list-component.html',
  styleUrl: './task-list-component.css',
})
export class TaskListComponent implements OnChanges {
  name: string = '';
  getName(elem: any) {
    let element = elem.target as HTMLButtonElement;
    this.name = element.innerText;
    // console.log(this.name);
  }

  //Get Data from App
  @Input() GetDataFromApp: ITask = {
    Id: '',
    Title: '',
    Description: '',
    Priority: '',
    DueDate: '',
    Category: '',
    Status: 'Not Done',
  };

  array: ITask[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['GetDataFromApp']?.firstChange) {
      return;
    }

    const newTask: ITask = changes['GetDataFromApp'].currentValue;

    const taskexist = this.array.find((t) => t.Id === newTask.Id);

    if (taskexist) {
      //  update
      this.array = this.array.map((t) => (t.Id === newTask.Id ? { ...t, ...newTask } : t));
      // console.log(this.array)
    } else {
      //  add
      this.array.push(this.GetDataFromApp);
      // console.log(this.array)
    }
  }

  // Function to Filter DoneTasks
  get FilterDoneTasks(): ITask[] {
    return this.array?.filter((t) => t.Status == 'Done') ?? [];
  }

  // Function to Filter NotDoneTasks
  get FilterNotDoneTasks(): ITask[] {
    return this.array?.filter((t) => t.Status == 'Not Done') ?? [];
  }

  // Function to  Get AllTasks
  get GetAllTasks(): ITask[] {
    return this.array ?? [];
  }

  selectedTask: ITask | null = null;

  GetItemIdToUpdateStatus(task: ITask) {
    this.selectedTask={...task,Status: 'Done' as Status}

    this.array = this.array.map(t => t.Id === task.Id ? { ...t, ...this.selectedTask } : t);

    console.log(this.selectedTask);
  }

  GetItemIdToDelete(task: ITask) {
    this.selectedTask = task;
    console.log(this.selectedTask);
    this.array = this.array.filter((t) => t.Id !== this.selectedTask?.Id);
  }

  // Get Data from AllTasks to TaskList

  GetItemIdToUpdate(task: ITask) {
    this.selectedTask = task;
    console.log(this.selectedTask);
    this.onUpdatelist(task);
  }

  // Transfer Data from   tasklist to App
  @Output() Updatelist: EventEmitter<ITask> = new EventEmitter<ITask>();

  onUpdatelist(task: ITask) {
    this.Updatelist.emit(task);
  }
}
