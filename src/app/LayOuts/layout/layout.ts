import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header-component/header-component';
import { FooterComponent } from '../../Components/footer-component/footer-component';
import { RouterOutlet } from '@angular/router';
import { Home } from '../../Pages//Home/home/home';
import { Tasks } from '../../Pages/tasks/tasks';
import { AddTask } from '../../Pages/add-task/add-task';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent,FooterComponent,RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  
}
