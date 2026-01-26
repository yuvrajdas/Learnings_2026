import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {

  /**
   * Multicast Observables : 
   * 1. Subject : special type of multicast observable, act as Observable and Observer, it means it can emit the data or subscribe. it does not store the last value, subscriber always get the latest emiited values.
   * 
   * 2. BehaviourSubject : Special type of multicast observable, It store the last emitted value and new subscriber get the last emited value
   * 3. ReplaySubject : it is a multicast Observable/Observer, it store the history of the last emitted value upto given buffer size, new subscriber gets the value upto given buffer size
   * 4. AsyncSubject : multicase observable/observer store the last value, just before of completion, after completion all subscriber recieve the last emitted value, (even for the future subscriber also)
   * 
   * 
  */

  sub = new Subject();
  bsub = new BehaviorSubject(0);
  replaySub = new ReplaySubject(2);
  asyncSub = new AsyncSubject() 

  ngOnInit(){
    // this.subjectEx()
    // this.behaviourSubEx();
    // this.replaySubEx();
    // this.asyncSubEx();
       this.voidSubEx();
  }

  voidSubEx(){ 
    let voidSub = new Observable<void>((obser)=>{
      console.log('inside observable');

      obser.next()
      obser.complete();
    })

    voidSub.subscribe((res)=>{
      console.log('void sub :', res)
    })
  }

  asyncSubEx(){
    this.asyncSub.next(1);
    this.asyncSub.next(2);
    this.asyncSub.subscribe((res)=>{
      console.log("async sub1 : ",res);
    })

    this.asyncSub.complete();
    this.asyncSub.subscribe((res)=>{
      console.log('async sub2 : ', res)
    })

  }

  replaySubEx(){
    this.replaySub.next(1);
    this.replaySub.next(2);
    this.replaySub.next(3);
    
    this.replaySub.subscribe((res)=>{
      console.log(res)
    })
    this.replaySub.next(4);
  }

  behaviourSubEx(){
    this.bsub.next(2);
    this.bsub.subscribe((res)=>{
      console.log("bsub 1 : ", res)
    })

    this.bsub.next(3);

    this.bsub.subscribe((res)=>{
      console.log("bsub 2 : ", res)
    })

  }

  subjectEx(){
    this.sub.next(1);

    this.sub.subscribe((res)=>{
      console.log(res);
    })
    this.sub.next(2);
    this.sub.next(3)
    this.sub.subscribe((res)=>{
      console.log("new sub :",res);
    })
    this.sub.next(4)
  }
 


}
