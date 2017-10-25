import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appAwesome]'
})
export class AwesomeDirective implements OnInit {

  @Input('appAwesome') myColor:string;

  constructor(private elr: ElementRef, private renderer: Renderer2) {
    //console.log(this.myColor);
  }

  ngOnInit() {
    //console.log(this.myColor);
    this.renderer.setStyle(this.elr.nativeElement, 'backgroundColor', this.myColor);
    this.renderer.setStyle(this.elr.nativeElement, 'color', 'black');
  }

}
