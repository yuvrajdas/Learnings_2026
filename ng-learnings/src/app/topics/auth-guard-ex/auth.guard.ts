// import { CanActivateFn } from '@angular/router';

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from "@angular/router";

// export const authGuard: CanActivateFn = (route, state) => {
//   return false;
// };
@Injectable({
  providedIn:'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild{
  
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    return true
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return true
  } 
  
}