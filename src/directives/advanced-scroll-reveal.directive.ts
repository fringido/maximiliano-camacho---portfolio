import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAdvancedScrollReveal]',
  standalone: true
})
export class AdvancedScrollRevealDirective implements OnInit, OnDestroy {
  @Input() animationType: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in' | 'slide-up' | 'rotate-in' = 'fade-up';
  @Input() delay: number = 0;
  @Input() duration: number = 400;
  @Input() threshold: number = 0.1;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setupElement();
    this.createObserver();
  }

  private setupElement() {
    const element = this.el.nativeElement;
    element.style.opacity = '0';
    element.style.transition = `all ${this.duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    
    switch (this.animationType) {
      case 'fade-up':
        element.style.transform = 'translateY(40px)';
        break;
      case 'fade-left':
        element.style.transform = 'translateX(-40px)';
        break;
      case 'fade-right':
        element.style.transform = 'translateX(40px)';
        break;
      case 'scale-in':
        element.style.transform = 'scale(0.9)';
        break;
      case 'slide-up':
        element.style.transform = 'translateY(60px)';
        break;
      case 'rotate-in':
        element.style.transform = 'rotate(-5deg) scale(0.95)';
        break;
    }
  }

  private createObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              this.animateIn(entry.target as HTMLElement);
            }, this.delay);
          }
        });
      },
      { threshold: this.threshold, rootMargin: '0px 0px -50px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private animateIn(element: HTMLElement) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0) translateX(0) scale(1) rotate(0)';
    this.observer.unobserve(element);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}