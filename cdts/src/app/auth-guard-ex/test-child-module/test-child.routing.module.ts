import {NgModule} from '@angular/core'
import { RouterModule } from '@angular/router'
import {Routes} from "@angular/router"
import { TestCComponent } from './test-c/test-c.component'
const routes:Routes = [
    {
        path:'',
        component:TestCComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]  
})

export class TestChildRoutingModule{

}