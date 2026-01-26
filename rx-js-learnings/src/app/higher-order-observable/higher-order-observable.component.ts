import { Component } from '@angular/core';
import { of, concatMap, map, concatAll, mergeMap, delay, switchMap, exhaustMap } from 'rxjs';

@Component({
  selector: 'app-higher-order-observable',
  templateUrl: './higher-order-observable.component.html',
  styleUrls: ['./higher-order-observable.component.scss']
})
export class HigherOrderObservableComponent {

  /**
   * Higher-Order-Observable : Higher order obserable are the observable that emit observable
   * 
   * 1. concateMap : Map the source observable and inner Observable and process them sequentially.
   * 2. mergeMap : Map the source observable and inner observable and process then concurrently/parallely.
   * 3. switchMap : Cancel the previoust observable and switch to the latest one.
   * 4. exhaustMap : Ignore the new Values untile the current one is completed
   * 
   * 
  */


  ngOnInit(){
    // this.concateMapEx();
    // this.mergeMapEx();
    this.switchMapEx();
      //  this.exhaustMapEx();
  }

  exhaustMapEx(){
    of(1500, 400, 3000).pipe(
      exhaustMap((val, idx)=>{
        let res = `${val} response of ${idx}`;
        return of(res).pipe(delay(val))
      })
    ).subscribe(console.log);
    
  }

  switchMapEx(){
    of(1500, 400, 3000).pipe(
      switchMap((val, idx)=>{
        let res = `${val} response of ${idx}`;
        return of(res).pipe(delay(val));
      })
    ).subscribe(console.log)
  }


  mergeMapEx(){
    of(3000,1000,5000).pipe( // outer observable
      mergeMap((val, idx)=>{
        let res = `${val} response ${idx}`;
        return of(res).pipe(delay(val));
      })
    ).subscribe(console.log)
  }

  concateMapEx(){
    of(1,2,3).pipe( // outer observable
      map((val,idx)=> of(val+idx))
      // concatMap((val, idx)=>{ // inner observable
      //   return of(val+idx)
      // })
    //  concatAll()
    ).forEach((res)=>{
      res.subscribe((res)=>{
        console.log(res);
        
      })
    })
  }
}
