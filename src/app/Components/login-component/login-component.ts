import { Component, inject} from '@angular/core';
import { FormsModule, NgForm, NgModel} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {
  route=inject(Router)
  EventHandler(form:NgForm){
    localStorage.setItem("UserName",form.form.controls?.["UserName"].value);
    localStorage.setItem("Password",form.form.controls?.["Password"].value);

    this.route.navigate(['/LayOut','Home'])
           console.log(this.route);
  }
}
