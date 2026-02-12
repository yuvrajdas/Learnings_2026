import { Component } from '@angular/core';
import { delay, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-rxjs-ex',
  templateUrl: './rxjs-ex.component.html',
  styleUrls: ['./rxjs-ex.component.scss']
})
export class RxjsExComponent {


  ngOnInit(){
    of(1000, 3000, 5000).pipe(
      switchMap((ele, idx)=>{
        let val = `value fo ${ele}, idx ${idx}`;
        return of(val).pipe(delay(ele));
      })
    ).subscribe(console.log);
    
  }
}
