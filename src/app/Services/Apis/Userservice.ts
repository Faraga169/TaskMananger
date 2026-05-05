import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUser } from '../../Interface/IUser';
import { BaseURL } from '../../Interface/IBaseURL';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  request=inject(HttpClient);
  Users:IUser[]|null=null;
  //Post SignUpUsers
  PostUser(Users:IUser|{}){
        return this.request.post<IUser>(`${BaseURL}/Users`,Users);
  }

  //Get SignUpUsers
  GetUsers(){
    return this.request.get<IUser[]>(`${BaseURL}/Users`);
  }
}
