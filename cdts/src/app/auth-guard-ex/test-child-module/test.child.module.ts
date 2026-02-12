import { NgModule } from '@angular/core';
import { TestCComponent } from './test-c/test-c.component'
import { TestChildRoutingModule } from './test-child.routing.module';

@NgModule({
    declarations:[
     TestCComponent
    ],
    imports:[
        TestChildRoutingModule
    ],
    exports:[],
    providers:[]
})
export class TestChildModule {

}