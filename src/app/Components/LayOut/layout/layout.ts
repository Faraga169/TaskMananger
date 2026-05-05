import { Component } from '@angular/core';
import { HeaderComponent } from '../../header-component/header-component';
import { FooterComponent } from '../../footer-component/footer-component';
import { RouterOutlet } from '@angular/router';
import { Home } from '../../Home/home/home';
import { Tasks } from '../../tasks/tasks';
import { AddTask } from '../../add-task/add-task';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent,FooterComponent,RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
