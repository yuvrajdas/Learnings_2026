import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Router, RouterModule, Routes } from "@angular/router";
import { TestComponent } from "./test.component";



const routes:Routes = [
    {
        path:'',
        component:TestComponent
    }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class testRouterModule{}