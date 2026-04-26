import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header-component/header-component';
import { TaskInputComponent } from './Components/task-input-component/task-input-component';
import { TaskListComponent } from './Components/task-list-component/task-list-component';
import { FooterComponent } from './Components/footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,TaskInputComponent,TaskListComponent,FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TaskManager');
}
