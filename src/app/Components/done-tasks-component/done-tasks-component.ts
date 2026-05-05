import { ITaskBase } from '../../Interface/ITaskBase';
import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { Tasks } from '../../Services/Apis/TaskService';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-done-tasks-component',
  imports: [DatePipe],
  templateUrl: './done-tasks-component.html',
  styleUrl: './done-tasks-component.css',
})
export class DoneTasksComponent {
TaskService = inject(Tasks);
toastr = inject(ToastrService);
Tasks = signal<ITaskBase[]>([]);
 currenruser=localStorage.getItem("UserName");

  ngOnInit(): void {
     this.TaskService.FilterDoneTasks().subscribe({
      next: (res) => {
         const usertasks=res.filter((u)=>u.UserName==this.currenruser);
        this.Tasks.update((tasks) => [...tasks, ...usertasks]);
        console.log(this.Tasks());
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Get Done Tasks Api respond Successfully!');
      },
    });
  }
 onUpdateClick(task: ITaskBase) {
  this.TaskService.UpdateTask(task).subscribe({
    next: (res) => {

       this.toastr.success('Go To Update Data in Form  🎉', 'Success', {
        timeOut: 2000,
        progressBar: true,
        positionClass: 'toast-top-right'
      });
      this.TaskService.selectedTask.set(res);
    }
  });
}

   onDeleteClick(task: ITaskBase) {
    this.TaskService.DeleteTask(task).subscribe(
      {
        next:(res)=>{
          this.Tasks.update((task)=>task.filter((t)=>t.id!==res.id));
     
            this.toastr.warning('Task Deleted 🗑️', 'Success', {
        timeOut: 2000,
        progressBar: true,
        positionClass: 'toast-top-right'
      });
        },
        error:(err)=>{
           console.log(err)
        },
         complete: () => {
        console.log('Delete Task Api respond Successfully!');
      }
      }
    );

  }
}
