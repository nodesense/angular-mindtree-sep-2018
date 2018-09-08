import { Directive,
         Input,
         OnInit,
         OnDestroy,
         HostListener,
         ElementRef,
         Renderer2
        } from '@angular/core';

// <div appHighlight 
// <p [appHighlight]

// div, p are called host element

@Directive({
  selector: '[appHighlight]' // attribute, [] must
})
export class HighlightDirective implements OnInit, OnDestroy{

  // <h2  [appHighlight]="'light' +  'blue'" 
 
  // appHighlight directive name and also input name

  @Input('appHighlight') // alias name 
  color: string;

  @Input()
  theme: string; // demo

  constructor(private hostElement: ElementRef, 
              private renderer: Renderer2) { 
    console.log('HighlightDirective created');
  }

  ngOnInit() {
    this.color = this.color || 'lightgreen';
    // nativeElement is real DOM element
    console.log('Directive TAG',
        this.hostElement.nativeElement.tagName);

    console.log('Directive onInit', this.color);

    console.log('theme ', this.theme);
  }

  ngOnDestroy() {
    console.log('Directive onDestory');
  }

  @HostListener('mouseenter')
  onEnter() {
   // console.log('mouse enter')
 
    this.renderer.setStyle(this.hostElement.nativeElement,
                           'background',
                           this.color);
  }

  @HostListener('mouseleave')
  onLeave() {
    // console.log('mouse leave')
    this.renderer.removeStyle(this.hostElement.nativeElement,
                              'background');
  }

}
