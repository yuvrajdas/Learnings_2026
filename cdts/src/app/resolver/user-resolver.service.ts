import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { of } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class UserResolverService implements Resolve<any>{

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return of({name:'Yuvraj', city:'Hyderabad'})    
    }
}