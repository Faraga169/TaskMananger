import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-header-component',
  imports: [RouterLink,RouterModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  router=inject(Router)
  LogOut(){
    localStorage.removeItem("UserName");
    localStorage.removeItem("Password");
      this.router.navigate(['/Auth','Login'])
  }
}
