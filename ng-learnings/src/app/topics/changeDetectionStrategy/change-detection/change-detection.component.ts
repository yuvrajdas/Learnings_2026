import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {

  myname:string = "Das";
  counter = 0;
  constructor(private cdr : ChangeDetectorRef){}

  obs = new Observable((observer)=>{
    setTimeout(()=>{
      observer.next('Yuvraj')
    },3000)
  })

  ngOnInit(){
    this.obs.subscribe((res)=>{
      console.log(res)
      this.myname = res as string;
      this.cdr.detectChanges();
    })

    // setInterval(()=>{
    //   this.counter++;
    //   console.log(this.counter);
      
    //   this.cdr.markForCheck();
    // },1000)
  }
  
   
  attach(){
    this.cdr.reattach();
  }

  detach(){
    this.cdr.detach()
  }


}
