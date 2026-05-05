import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IError } from '../../Interface/IError';
import { Tasks } from '../../Services/Apis/TaskService';
import { Title } from '@angular/platform-browser';
import { ITaskBase } from '../../Interface/ITaskBase';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-task-input-component',
  imports: [FormsModule],
  templateUrl: './task-input-component.html',
  styleUrl: './task-input-component.css',
})
export class TaskInputComponent {
    TaskService = inject(Tasks);
    toastr = inject(ToastrService);
    currentuser=localStorage.getItem("UserName");
    Task=signal<ITaskBase>(
      {
    Title: '',
    Description: '',
    Priority: '',
    DueDate: '',
    Category: '',
    Status: 'Not Done',
    UserName:this.currentuser
  }
    );

      isEditMode: boolean = false;
  ngOnInit(): void {
     const task = this.TaskService.selectedTask();
     console.log(task);

  if (task) {

    this.Task.set(task);
    this.isEditMode=true;
  }
}



  Error: IError = {
    message: '',
    state: false,
  };

  Update() {
    // this.itemevent.emit(this.Task);
    this.TaskService.UpdateTask(this.Task()).subscribe({
      next:(res)=>{
           this.toastr.success('Task Updated Successfully  🎉', 'Success', {
        timeOut: 2000,
        progressBar: true,
        positionClass: 'toast-top-right'
      });
       this.TaskService.selectedTask.set(null);
      this.isEditMode = false;


    }
  });
    this.Task.set(
       {
      Title: '',
      Description: '',
      Priority: '',
      DueDate: '',
      Category: '',
      Status: 'Not Done',
      UserName:this.currentuser
    }
  );
  }


  Submit() {
    const task = this.Task();
    for (let key in task) {
      const k = key as keyof ITaskBase; // This casting use keyof to make a compiler get sure that key exist in InterfaceofTask
      if (task[k]== '') {
        console.log(this.Task);
        // console.log(this.Task[k]);
        this.Error.message = 'You should Fill inputs field';
        this.Error.state = true;
        return;
      }
    }
    this.Error.state = false;
    this.TaskService.PostTask(this.Task()).subscribe({
      next: (res) => {
             this.toastr.success('Task Added Successfully  🎉', 'Success', {
        timeOut: 2000,
        progressBar: true,
        positionClass: 'toast-top-right'
      });
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('PostTaskApi Send Successfully!');
      },
    });
    // console.log(this.Task);
    this.isEditMode = false;
    this.Task.set(
       {
      Title: '',
      Description: '',
      Priority: '',
      DueDate: '',
      Category: '',
      Status: 'Not Done',
      UserName:this.currentuser
    }
    )
  }
}
