import { Component } from "@angular/core";
import {HttpClient} from "@angular/common/http"
@Component({
    selector:'app-test-component',
    template:'',
    styles:[]
})
export class TestComponent{

    constructor(private http:HttpClient){

    }

    ngOnInit(){
        this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res)=>{
                
        })
    }
}   