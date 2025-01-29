import { Directive } from '@angular/core';

@Directive({
  selector: '[appAlertIt]',
  host:{
    '(click)':'onClick()'
  }
})
export class AlertItDirective {

  constructor() { 
   
  }
  onClick(event:MouseEvent)
  {
    alert('you are going on right path');
  }

}
