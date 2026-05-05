import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login-component/login-component';
import { SignUpComponent } from './Pages/sign-up-component/sign-up-component';
import { NotFound } from './Pages/NotFound/not-found/not-found';
import { Layout } from './LayOuts/layout/layout';
import { Home } from './Pages/Home/home/home';
import { Auth } from './LayOuts/auth/auth';
import { activateguardGuard } from './guard/activateguard-guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'Auth',
    pathMatch: 'full'
  },

  {
    path:'Auth',
    component:Auth,
    children:[
      {
        path:'',
        redirectTo:'Login',
        pathMatch:'full'
      },
              {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'SignUp',
    component: SignUpComponent
  }

    ]
  },



  {
    path: 'LayOut',
    component: Layout,
    canActivate:[activateguardGuard],
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home', component: Home },
      { path: 'Tasks',loadComponent:async function(){
        const L=await import('./Pages/tasks/tasks');
           return L.Tasks;
      }
     },
      { path: 'AddTask', loadComponent:async function(){
        const L=await import('./Pages/add-task/add-task');
           return L.AddTask;
      }  }
    ]
  },


  {
    path: '**',
    component: NotFound
  }
];
