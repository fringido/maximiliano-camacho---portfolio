import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appTypewriter]',
  standalone: true
})
export class TypewriterDirective implements OnInit, OnDestroy {
  @Input() speed: number = 30;
  @Input() delay: number = 0;
  @Input() cursor: boolean = true;

  private observer!: IntersectionObserver;
  private originalText: string = '';
  private isAnimating: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.originalText = this.el.nativeElement.textContent || '';
    this.el.nativeElement.textContent = '';
    
    if (this.cursor) {
      this.el.nativeElement.classList.add('typewriter-cursor');
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.isAnimating) {
            setTimeout(() => {
              this.startTypewriter();
            }, this.delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private startTypewriter() {
    this.isAnimating = true;
    let i = 0;
    const element = this.el.nativeElement;
    
    const typeInterval = setInterval(() => {
      if (i < this.originalText.length) {
        element.textContent = this.originalText.substring(0, i + 1);
        i++;
      } else {
        clearInterval(typeInterval);
        if (this.cursor) {
          element.classList.remove('typewriter-cursor');
        }
        this.observer.unobserve(element);
      }
    }, this.speed);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}