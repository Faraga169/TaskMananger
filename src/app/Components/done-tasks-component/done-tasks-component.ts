import { ITask } from './../../Interface/ITask';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-done-tasks-component',
  imports: [],
  templateUrl: './done-tasks-component.html',
  styleUrl: './done-tasks-component.css',
})
export class DoneTasksComponent {
   // Get data from InputList to DoneTasks
  @Input() GetDataFromlist: ITask[] = [];

   // Transfer Data from DoneTasks to tasklist
@Output() Updateitem: EventEmitter<ITask> = new EventEmitter<ITask>();

 onUpdateClick(task: ITask) {
  this.Updateitem.emit(task);
}

@Output() Deleteitem: EventEmitter<ITask> = new EventEmitter<ITask>();
onDeleteClick(i:ITask){
  this.Deleteitem.emit(i);
      console.log(this.GetDataFromlist)
}






}
