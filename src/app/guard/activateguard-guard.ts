import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const activateguardGuard: CanActivateFn = (route, state) => {
  const router=inject(Router)
  const username=localStorage.getItem("UserName");
  const Password=localStorage.getItem("Password");
  if(username &&Password){
    return true;
  }
  router.navigate(['/Auth','Login'])
  return false;
};
