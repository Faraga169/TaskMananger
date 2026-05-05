import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login-component/login-component';
import { SignUpComponent } from './Components/sign-up-component/sign-up-component';
import { NotFound } from './Components/NotFound/not-found/not-found';
import { Layout } from './Components/LayOut/layout/layout';
import { Home } from './Components/Home/home/home';
import { Tasks } from './Components/tasks/tasks';
import { AddTask } from './Components/add-task/add-task';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  },

  // Auth
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'SignUp',
    component: SignUpComponent
  },


  {
    path: 'LayOut',
    component: Layout,
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home', component: Home },
      { path: 'Tasks', component: Tasks },
      { path: 'AddTask', component: AddTask }
    ]
  },


  {
    path: '**',
    component: NotFound
  }
];
