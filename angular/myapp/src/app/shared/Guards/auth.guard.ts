import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  if(!!sessionStorage.getItem("user")){
      window.alert("user is unable to login")
      return true
  }else{
  return false;
  }
};