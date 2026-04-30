import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header-component/header-component';
import { TaskInputComponent } from './Components/task-input-component/task-input-component';
import { TaskListComponent } from './Components/task-list-component/task-list-component';
import { FooterComponent } from './Components/footer-component/footer-component';
import { CarouselComponent } from "./Components/carousel-component/carousel-component";
import { ITask } from './Interface/ITask';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TaskInputComponent, TaskListComponent, FooterComponent, CarouselComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // get data from inputlist to app
  data: ITask={
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
