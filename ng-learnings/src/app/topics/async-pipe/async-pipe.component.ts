import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent {

  obs = new Observable((observer)=>{
    observer.next("Hello World")
  })

  promise = new Promise((resolve)=>{
    resolve('Promise World')
  })
}
