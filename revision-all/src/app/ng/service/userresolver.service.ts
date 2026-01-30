import { Inject, Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { of } from "rxjs";

@Injectable()
export class UserResolverService implements Resolve<any>{
    
    resolve(){
        return of('something')
    }
}