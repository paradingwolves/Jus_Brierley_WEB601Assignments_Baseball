import { Directive, ElementRef, HostListener, Input, Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface'; 
@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  private originalFontWeight: string;
  @Input('appHoverAffect') hoverStyle: any;

  constructor(private el: ElementRef) {
    this.originalFontWeight = this.el.nativeElement.style.fontWeight
  }

  /* method to make tags bold and type underlined on hover */
  @HostListener('mouseenter') onMouseEnter() {
    this.hover(this.hoverStyle);
    this.el.nativeElement.style.textDecoration = 'underline';
    const tags = this.el.nativeElement[this.hoverStyle] as string[];
    if (tags) {
      tags.forEach(tag => {
        const tagElement = this.el.nativeElement.querySelector(`.${tag}`);
        if (tagElement) {
          tagElement.style.fontWeight = 'bold';
        }
      });
    }
  }
  /* method to revert items back to their default styles */
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.fontWeight = this.originalFontWeight;
    this.el.nativeElement.style.textDecoration = 'none';
    const tags = this.el.nativeElement[this.hoverStyle] as string[];
    if (tags) {
      /* bold tags that are being hovered over */
      tags.forEach(tag => {
        const tagElement = this.el.nativeElement.querySelector(`.${tag}`);
        if (tagElement) {
          tagElement.style.fontWeight = '100';
        }
      });
    }
  }
  private hover(style: any) {
    for (const key in style) {
      if (style.hasOwnProperty(key)) {
        this.el.nativeElement.style[key] = style[key];
      }
    }
  }
}




  


