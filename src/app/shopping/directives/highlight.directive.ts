import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private elementRef: ElementRef;

  @Input()
  public color: string;

  @Input()
  public myClass:string;


  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if(this.color !== undefined)
      this.elementRef.nativeElement.style.backgroundColor = this.color;
    if(this.myClass !== undefined)  
      this.elementRef.nativeElement.classList.add(this.myClass);  
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = "white";
    this.elementRef.nativeElement.classList.remove(this.myClass);
  }

}
