import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { ITaskBase } from '../../Interface/ITaskBase';
import { Tasks } from '../../Services/Apis/TaskService';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-not-done-tasks-component',
  imports: [DatePipe],
  templateUrl: './not-done-tasks-component.html',
  styleUrl: './not-done-tasks-component.css',
})
export class NotDoneTasksComponent {

 TaskService = inject(Tasks);
 Tasks = signal<ITaskBase[]>([]);
 toastr = inject(ToastrService);

 currenruser=localStorage.getItem("UserName");
ngOnInit(): void {
    this.TaskService.FilterNotDoneTasks().subscribe({
      next: (res) => {
         const usertasks=res.filter((u)=>u.UserName==this.currenruser);
        this.Tasks.update((tasks) => [...tasks, ...usertasks]);
        console.log(this.Tasks());
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Get not Done Tasks Api respond Successfully!');
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

  onDoneClick(task: ITaskBase) {
    this.TaskService.ChangeStatus(task).subscribe(
      {
        next:(res)=>{
           this.toastr.success('Task Done Successfully 🎉', 'Success', {
        timeOut: 2000,
        progressBar: true,
        positionClass: 'toast-top-right'
      });
        this.Tasks.update((tasks)=>tasks.map((t)=>t.id==res.id?res:t))
        }
      }
    )

  }


}
