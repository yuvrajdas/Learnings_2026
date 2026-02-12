import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss']
})
export class GenericButtonComponent {
  @Input() buttonIconName: string = '';
  @Input() buttonText: string = '';
  @Input() buttonColor: string = '';
  @Input() isDisable: boolean = false;
  @Input() isPopupButton:boolean = false;


  @Output() btnEvent = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    
  }
  onButtonClick(): void {
    this.btnEvent.emit();
  }
}
