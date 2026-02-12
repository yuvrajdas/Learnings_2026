import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-cds',
  templateUrl: './cds.component.html',
  styleUrls: ['./cds.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CdsComponent {

  cdr = inject(ChangeDetectorRef);

  val =10;

  ngOnInit(){
    setTimeout(()=>{
      this.val = 102;
      this.cdr.detectChanges();
    },2000)
  }

  update(){
    this.val++;
  }
}
