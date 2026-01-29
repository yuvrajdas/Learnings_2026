import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   obs = new Observable((observer)=>{
      let count = 0;
      let id = setInterval(()=>{
        observer.next(count++);

        if(count>3){
          observer.error("error")
        }
      },1000)

      
    })

  ngOnInit(){
   
  }
}
