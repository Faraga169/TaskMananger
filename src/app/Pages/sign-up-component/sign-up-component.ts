import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../Services/Apis/Userservice';
import { Router } from '@angular/router';
import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ValidationError } from '@angular/forms/signals';
import { IUser } from '../../Interface/IUser';

@Component({
  selector: 'app-sign-up-component',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up-component.html',
  styleUrl: './sign-up-component.css',
})
export class SignUpComponent {
  toastr=inject(ToastrService)
      User=signal<IUser|{}>({})
      UserService=inject(UserService)
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

   this.User.set({
    UserName:formgroup.get("Username")?.value,
    Email:formgroup.get("Email")?.value,
    Password:formgroup.get("Password")?.value,
    ConfirmPassword:formgroup.get("ConfirmPassword")?.value
   })
  this.UserService.PostUser(this.User()).subscribe(
    {
      next:(res)=>{
           console.log(res);
             this.toastr.success('You Make Sign Up Successfully 🎉', 'Success', {
        timeOut: 2000,
        progressBar: true,
        positionClass: 'toast-top-right'
      });
            this.route.navigate(['/Auth','Login']);
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("User SignUp Api respond successfully!")
      }
    }
  )

    // console.log(data)
  }
}
