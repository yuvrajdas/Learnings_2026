import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss']
})
export class SignalsComponent {
  /**
   * Signals : signal is a wrapper around a value or Reactive premitive. It holds a premetive values and whenver it's value change it notify the consumer
   * Signals can be : 1. Readable 2. Writable
   * 
   * 
   * 
  */

  x = signal(10)
  y = signal(20)
  
  total = computed(()=>this.x()+this.y())
  
  constructor(){
    effect(()=>{
      console.log("x effect :",this.x())
      console.log("y effect :", this.y())
    })
  }

  updateSingnalValue(param:string){
    if(param === 'x'){
      this.x.set(this.x()+1);
    }

    if(param === 'y'){
       this.y.update((val)=>{
        console.log(val)
        return val+1;
       })
      // this.y.set(this.y()+1)
    }
  }


}
