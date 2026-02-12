import { Component, computed, effect, signal } from '@angular/core';
 

@Component({
  selector: 'app-singnals-ex',
  templateUrl: './singnals-ex.component.html',
  styleUrls: ['./singnals-ex.component.scss']
})
export class SingnalsExComponent {

  x = signal(10);
  y = signal(20)

  total = computed(()=>this.x()+this.y())

  ngOnInit(): void {
    effect(()=>{

    })
  }
}
