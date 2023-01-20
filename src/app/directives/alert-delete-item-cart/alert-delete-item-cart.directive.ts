import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAlertDeleteItemCart]',
})
export class AlertDeleteItemCartDirective implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(){
    console.log(this.elementRef.nativeElement)
  }
  



  
}
