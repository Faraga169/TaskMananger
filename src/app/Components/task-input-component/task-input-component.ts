import { ITask } from './../../Interface/ITask';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IError } from '../../Interface/IError';
@Component({
  selector: 'app-task-input-component',
  imports: [FormsModule],
  templateUrl: './task-input-component.html',
  styleUrl: './task-input-component.css',
})
export class TaskInputComponent {
Task: ITask = {
    Id: this.GetId(),
    Title: '',
    Description: '',
    Priority: '',
    DueDate: '',
    Category: '',
    Status: 'Not Done'
  };
isEditMode:boolean=false;
@Input() set UpdateTask(task: ITask | null) {
  if (task) {
    this.Task = { ...task };   // copy
    this.isEditMode = true;
  }
}
  // TRansfer data from TaskInput to App
  @Output() itemevent: EventEmitter<ITask> = new EventEmitter<ITask>();

  // Get Data from App to TaskInput
  Error: IError = {
    message: '',
    state: false,
  };


  Update() {
    this.itemevent.emit(this.Task);
    this.Task = {
      Id: this.Task.Id,
      Title: '',
      Description: '',
      Priority: '',
      DueDate: '',
      Category: '',
      Status: 'Not Done'
    };
      this.isEditMode = false;
  }

  GetId() {
    let id = crypto.randomUUID().split('-')[0];
    return id;
  }

  Submit() {
    for (let key in this.Task) {
      const k = key as keyof ITask; // This casting use keyof to make a compiler get sure that key exist in InterfaceofTask
      if (this.Task[k] == '') {
        console.log(this.Task);
        // console.log(this.Task[k]);
        this.Error.message = 'You should Fill inputs field';
        this.Error.state = true;
        return;
      }
    }
    this.Error.state = false;

    this.itemevent.emit(this.Task);
    // console.log(this.Task);
    this.isEditMode = false;
    this.Task = {
      Id: this.GetId(),
      Title: '',
      Description: '',
      Priority: '',
      DueDate: '',
      Category: '',
      Status: 'Not Done'
    };
  }
}
