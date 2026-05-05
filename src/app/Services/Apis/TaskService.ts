import { Status } from './../../Interface/ITaskBase';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { BaseURL } from '../../Interface/IBaseURL';
import { ITaskBase } from '../../Interface/ITaskBase';

@Injectable({
  providedIn: 'root',
})
export class Tasks {
  request = inject(HttpClient);
  selectedTask = signal<ITaskBase | null>(null);

  //Post Task Api
  PostTask(task: ITaskBase) {
    return this.request.post<ITaskBase>(BaseURL + '/Tasks', task);
  }
  //Get All Tasks Api
  GetAllTasks() {
    return this.request.get<ITaskBase[]>(BaseURL + '/Tasks');
  }

  // Update Task
  UpdateTask(task: ITaskBase) {
  return this.request.put<ITaskBase>(
    `${BaseURL}/Tasks/${task.id}`,
    task
  );
}

  //Delete Task
   DeleteTask(task:ITaskBase){
    return this.request.delete<ITaskBase>(`${BaseURL}/Tasks/${task.id}`);
  }

  // Get NotDoneTasks Filter by Api
  FilterNotDoneTasks(){
    return this.request.get<ITaskBase[]>(`${BaseURL}/Tasks?Status=Not Done`);

  }

   // Get DoneTasks Filter by Api
   FilterDoneTasks(){
    return this.request.get<ITaskBase[]>(`${BaseURL}/Tasks?Status=Done`);

  }

  // Change StatusofTask by Api
  ChangeStatus(task:ITaskBase){
    return this.request.patch<ITaskBase>(`${BaseURL}/Tasks/${task.id}`,{
      Status:"Done"
    });
  }
}
