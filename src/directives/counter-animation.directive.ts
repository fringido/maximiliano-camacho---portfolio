import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appCounterAnimation]',
  standalone: true
})
export class CounterAnimationDirective implements OnInit, OnDestroy {
  @Input() targetValue: number = 0;
  @Input() duration: number = 1000;
  @Input() delay: number = 0;
  @Input() suffix: string = '';

  private observer!: IntersectionObserver;
  private hasAnimated: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.textContent = '0' + this.suffix;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            setTimeout(() => {
              this.startCounter();
            }, this.delay);
          }
        });
      },
      { threshold: 0.3 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private startCounter() {
    this.hasAnimated = true;
    const element = this.el.nativeElement;
    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (this.targetValue - startValue) * easeOutQuart);
      
      element.textContent = currentValue + this.suffix;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = this.targetValue + this.suffix;
        this.observer.unobserve(element);
      }
    };

    requestAnimationFrame(animate);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}