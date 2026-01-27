import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoadingStrategyComponent } from "./loading-strategy/loading-strategy.component";
import { LazyLoadableComComponent } from "./lazy-loadable-com/lazy-loadable-com.component";

const routes:Routes = [
    {
        path:'',
        component:LoadingStrategyComponent,
    },
    {
        path:'lazy-loadable-com',
        component:LazyLoadableComComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class LoadingStrategyRoutingModule{

}