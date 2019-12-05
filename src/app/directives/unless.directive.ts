import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  private templateRef:TemplateRef<any>;
  private viewContainerRef:ViewContainerRef;
  
  @Input()
  set appUnless(condition:boolean){
    if(condition){
      this.viewContainerRef.clear();
    }else{
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(templateRef:TemplateRef<any>, viewContainerRef:ViewContainerRef) { 
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
  }

  

}
