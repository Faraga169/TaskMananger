import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../Interface/ITask';

@Component({
  selector: 'app-all-tasks-component',
  imports: [],
  templateUrl: './all-tasks-component.html',
  styleUrl: './all-tasks-component.css',
})
export class AllTasksComponent {

  // Get data from InputList to AllTasks
  @Input()GetDataFromlist:ITask[]=[];

  // Transfer Data from AllTasks to tasklist
@Output() Updateitem: EventEmitter<ITask> = new EventEmitter<ITask>();

 onUpdateClick(task: ITask) {
  this.Updateitem.emit(task);
}

@Output() Deleteitem: EventEmitter<ITask> = new EventEmitter<ITask>();
onDeleteClick(i:ITask){
  this.Deleteitem.emit(i);
      console.log(this.GetDataFromlist)
}

@Output() Doneitem: EventEmitter<ITask> = new EventEmitter<ITask>();
onDoneClick(i:ITask){
  this.Doneitem.emit(i);
      console.log(this.GetDataFromlist)
}
}
