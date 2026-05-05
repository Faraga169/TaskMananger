import { ITaskBase } from './../../Interface/ITaskBase';
import { TaskListComponent } from './../../Components/task-list-component/task-list-component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [TaskListComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  // get data from inputlist to app
  data: ITaskBase = {
    Title: '',
    Description: '',
    Priority: '',
    DueDate: '',
    Category: '',
    Status: 'Not Done',
    UserName:localStorage.getItem("UserName")
  };

  GetData(value: ITaskBase) {
    this.data = { ...value };
    console.log('Come from Inputlist:' + this.data);
  }

  // get data from tasklist to app
  listdata: ITaskBase | null = null;

  GetListData(data: ITaskBase) {
    this.listdata = data;
    console.log(this.listdata);
  }
}
