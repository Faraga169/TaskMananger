import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../Interface/ITask';

@Component({
  selector: 'app-not-done-tasks-component',
  imports: [],
  templateUrl: './not-done-tasks-component.html',
  styleUrl: './not-done-tasks-component.css',
})
export class NotDoneTasksComponent {
 // Get data from InputList to NotDoneTasks
  @Input() GetDataFromlist:ITask[]=[];


    // Transfer Data from Not DoneTasks to tasklist
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
