import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { Tasks } from '../../Services/Apis/TaskService';
import { ITaskBase } from '../../Interface/ITaskBase';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-tasks-component',
  imports: [DatePipe],
  templateUrl: './all-tasks-component.html',
  styleUrl: './all-tasks-component.css',
})
export class AllTasksComponent {
  Tasks = signal<ITaskBase[]>([]);

  TaskService = inject(Tasks);
  toastr = inject(ToastrService);
   router=inject(Router);
  currentUser = localStorage.getItem('UserName');


  ngOnInit(): void {
    this.TaskService.GetAllTasks().subscribe({
      next: (res) => {
        const usertasks=res.filter((u)=>u.UserName==this.currentUser);
        this.Tasks.update((tasks) => [...tasks, ...usertasks]);
        console.log(this.Tasks());
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Get All Tasks Api respond Successfully!');
      },
    });
  }



 onUpdateClick(task: ITaskBase) {
  this.TaskService.UpdateTask(task).subscribe({
    next: (res) => {
      this.TaskService.selectedTask.set(res);
          this.toastr.success('Go To Update Data in Form  🎉', 'Success', {
        timeOut: 2000,
        progressBar: true,
        positionClass: 'toast-top-right'
      });

      this.router.navigate(['/LayOut','AddTask']);

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
            this.toastr.success('Task Done Successfully  🎉', 'Success', {
        timeOut: 2000,
        progressBar: true,
        positionClass: 'toast-top-right'
      });
        this.Tasks.update((tasks)=>tasks.map((t)=>t.id==res.id?res:t))
        }
      }
    )

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }
}
