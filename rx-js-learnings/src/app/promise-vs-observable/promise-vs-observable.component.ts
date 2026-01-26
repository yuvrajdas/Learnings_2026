import { Component, booleanAttribute } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-promise-vs-observable',
  templateUrl: './promise-vs-observable.component.html',
  styleUrls: ['./promise-vs-observable.component.scss']
})

export class PromiseVsObservableComponent {
 
  /**
   * Promise : Promises are always multicast (Hot Obserbale) multipe consumer share the same producer.
   * Observable : observable can be multicase/unicast 
   * 
   * Multicase observable (Hot Observable) : Subject
   * Unicast Observable (cold) : Observable, HttpClient
   * 
   * 
  */

  ngOnInit(){
    // this.hotObservable();
    // this.coldObservable();
  }

  hotObservable(){
    let count = 0;
    const sub$ = new Subject();

    let id = setInterval(()=>{
      sub$.next(count++);
    },1000)

    sub$.subscribe((res)=>{
      console.log("sub1 :",res)
    })

    setTimeout(()=>{
      sub$.subscribe((res)=>{
        console.log('sub2 :', res);
        
      })
    }, 5000)

    setTimeout(()=>{
      sub$.unsubscribe();
      clearInterval(id)
    },10000)
  }

  coldObservable(){
    let obs = new Observable((obser)=>{
      let count = 0;
      setInterval(()=>{
        obser.next(count++)
      },1000)
    })

    obs.subscribe((res)=>{
      console.log("unicase obs1 :", res)
    })

    setTimeout(()=>{

      obs.subscribe((res)=>{
        console.log("unicase obs2 :",res)
      })
      
    },5000)
  }

}
