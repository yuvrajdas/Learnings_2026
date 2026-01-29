import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.scss']
})
export class ApiCallComponent {

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res)=>{
      console.log(res)
    })
  }
}
