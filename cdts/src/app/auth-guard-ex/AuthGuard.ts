import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    canActivate(route:any, state:any) : boolean{
        return true;
    }

    canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
        return false
    }
}