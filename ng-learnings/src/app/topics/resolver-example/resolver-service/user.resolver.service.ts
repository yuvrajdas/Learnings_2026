import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class UserResolverService{
    userData$ = new BehaviorSubject({name:'Yuvraj', mobile:'9009645679'})

    resolve(){
        return this.userData$.asObservable();
    }
}