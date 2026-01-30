import { NgModule } from "@angular/core";
import { TestComponent } from "./test.component";
import { testRouterModule } from "./test.routing.module";

@NgModule({
    declarations:[
        TestComponent
    ],
    imports:[
        testRouterModule
    ],
    exports:[],
    providers:[]
})
export class TestModule{

}