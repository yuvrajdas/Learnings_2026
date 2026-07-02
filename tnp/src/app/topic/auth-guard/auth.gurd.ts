import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate, CanActivateChild{

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
        return true;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return true;
    }
}