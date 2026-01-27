import { NgModule } from "@angular/core";
import { LazyLoadableComComponent } from "./lazy-loadable-com/lazy-loadable-com.component";
import { LoadingStrategyComponent } from "./loading-strategy/loading-strategy.component";
import { LoadingStrategyRoutingModule } from "./loading-strategy.routing.module";

@NgModule({
    declarations:[
        LazyLoadableComComponent,
        LoadingStrategyComponent
    ],
    imports:[
        LoadingStrategyRoutingModule
    ],
    providers:[]
})
export class LazyLoadingStrategyModule{

}