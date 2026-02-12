import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'app-protected-com-ex',
    template:`<button (click)="loadTestChild()">go to Test child</button> <router-outlet></router-outlet>`,
    styles:[]
})
export class ProtectedComEx {

    constructor(private router:Router){}
    ngOnInit(): void {
        console.log("protectedRoute component");
    }

    loadTestChild(){
        this.router.navigateByUrl('pce/child-m')
    }
}