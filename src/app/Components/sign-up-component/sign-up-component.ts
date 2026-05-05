import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ValidationError } from '@angular/forms/signals';

@Component({
  selector: 'app-sign-up-component',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up-component.html',
  styleUrl: './sign-up-component.css',
})
export class SignUpComponent {
      route=inject(Router)
  NotMatch(FormGroup:AbstractControl):ValidationErrors|null{
    const password=FormGroup.get("Password")?.value;
    const ConfirmPassword=FormGroup.get("ConfirmPassword")?.value;
    return password!==ConfirmPassword?{notmatch:true}:null
  }
  form=new FormGroup({
    Username:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,15}$')]),
    Email:new FormControl('',[Validators.required,Validators.email]),
    Password:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@#$!%*?&])[a-zA-Z\\d@#$!%*?&]{6,}$')]),
    ConfirmPassword:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@#$!%*?&])[a-zA-Z\\d@#$!%*?&]{6,}$')])
  },
  {validators:this.NotMatch});
  EventHandler(formgroup:FormGroup){

   const data=formgroup.value
   this.route.navigate(['/Login']);
    console.log(data)
  }
}
