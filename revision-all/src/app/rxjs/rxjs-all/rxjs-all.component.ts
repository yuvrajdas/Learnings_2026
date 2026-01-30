import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject, delay, from, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-rxjs-all',
  templateUrl: './rxjs-all.component.html',
  styleUrls: ['./rxjs-all.component.scss']
})
export class RxjsAllComponent {

  sub = new Subject();
  behavSub = new BehaviorSubject(0)
  replaySub = new ReplaySubject(2)
  asyncSub =  new AsyncSubject();
  voidSub = new Subject<void>()

  ngOnInit(){
    // this.subjectEx();
    // this.behaviourSubEx()
    // this.replaySubEx();
    // this.asyncSubEx();  
    // this.voidSubEx()

    // ------------------------- Higher Order Observale --------------------
    // this.higherOrderObsEx()
    this.operatorsEx()
  }

  operatorsEx(){
    from([1,2,4]).subscribe(console.log);
  }
  
  higherOrderObsEx(){
    of(1000,2000,4000).pipe(
      switchMap((val, idx)=>{
        let res = `${val} operator ${idx}`;
        return of(res).pipe(delay(val));
      })
    ).subscribe(console.log)
  
  }

  voidSubEx(){
    this.voidSub.next();

  }

  asyncSubEx(){
    this.asyncSub.next(1);
    this.asyncSub.next(2)

    this.asyncSub.subscribe(console.log)
    this.asyncSub.complete()
    this.asyncSub.subscribe(console.log)

  }

  replaySubEx(){
    this.replaySub.next(10)
    this.replaySub.next(20)
    this.replaySub.next(30)

    this.replaySub.subscribe(console.log)
    this.replaySub.next(1)
  }

  behaviourSubEx(){
    this.behavSub.subscribe(console.log);
    this.behavSub.next(1)
  }

  subjectEx(){
    this.sub.next(1);
    this.sub.subscribe((r)=>{
      console.log("sub1 :", r);
    })
  }
}
