import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header-component/header-component';
import { TaskInputComponent } from './Components/task-input-component/task-input-component';
import { TaskListComponent } from './Components/task-list-component/task-list-component';
import { FooterComponent } from './Components/footer-component/footer-component';
import { CarouselComponent } from "./Components/carousel-component/carousel-component";
import { ITask } from './Interface/ITask';
import { LoginComponent } from "./Components/login-component/login-component";
import { SignUpComponent } from "./Components/sign-up-component/sign-up-component";
import { NotFound } from './Components/NotFound/not-found/not-found';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {




}
