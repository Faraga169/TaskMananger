import { UserService } from './../../Services/Apis/Userservice';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm, NgModel} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IUser } from '../../Interface/IUser';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule, RouterLink],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {
  route=inject(Router)
  UserService=inject(UserService)
  User:Partial<IUser|null>=null;
  Errormessage=signal<string>('');
  flag:boolean=true;

  EventHandler(username:NgModel,password:NgModel){

     this.User={
           UserName:username.value,
           Password:password.value
     }
  this.UserService.GetUsers().subscribe({
    next:(res)=>{


            const userExists = res.some(
             u => u.UserName === this.User?.UserName &&
             u.Password === this.User.Password
      );
      if(userExists){
                    this.flag=true;
                     localStorage.setItem("UserName",username.value);
                     localStorage.setItem("Password",password.value);
                     this.route.navigate(['/LayOut','Home'])
                    //  console.log(res);
      }
      else{
          this.flag=false;
          this.Errormessage.set("This Account not exist in App. Please Make Sign Up First");
          console.log(this.Errormessage)

      }
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      console.log("Get User Api respond successfully");
    }
  })



           console.log(this.route);
  }
}
