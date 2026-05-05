import { Component } from '@angular/core';
import { CarouselComponent } from '../../carousel-component/carousel-component';
import { TaskInputComponent } from '../../task-input-component/task-input-component';
import { TaskListComponent } from '../../task-list-component/task-list-component';
import { ITask } from '../../../Interface/ITask';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent,TaskInputComponent,TaskListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // get data from inputlist to app
  data:ITask={
     Id: '',
      Title: '',
      Description: '',
      Priority: '',
      DueDate: '',
      Category: '',
      Status: 'Not Done'
    };



  GetData(value:ITask){
      this.data={...value};
      console.log("Come from Inputlist:"+this.data);
  }


  // get data from tasklist to app
  listdata:ITask|null=null;

  GetListData(data:ITask){
      this.listdata=data;
      console.log(this.listdata);
  }

}
