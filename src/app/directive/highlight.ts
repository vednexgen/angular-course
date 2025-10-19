import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {
  color: string | undefined;
  @Input('appHighlight') appHighlightFlag!: string | 'false';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    if(this.appHighlightFlag === 'true') {
      this.color = "lightgreen"
    } else {
      this.color = "yellow"
    }
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
