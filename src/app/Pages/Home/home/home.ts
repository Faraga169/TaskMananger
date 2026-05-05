import { Component } from '@angular/core';
import { CarouselComponent } from '../../../Components/carousel-component/carousel-component';
import { TaskInputComponent } from '../../../Components/task-input-component/task-input-component';
import { TaskListComponent } from '../../../Components/task-list-component/task-list-component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 
}
