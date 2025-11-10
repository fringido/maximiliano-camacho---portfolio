import { ChangeDetectionStrategy, Component, signal, ElementRef, inject, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent implements OnInit, OnDestroy {
  private elementRef = inject(ElementRef);
  private observer: IntersectionObserver | undefined;
  private animationStarted = false;

  stats = [
    { value: 7, text: 'years', subtitle: 'experience', displayedValue: signal(0), suffix: '+' },
    { value: 15, text: 'projects', subtitle: 'completed', displayedValue: signal(0), suffix: '+' },
    { value: 5, text: 'industries', subtitle: 'served', displayedValue: signal(0), suffix: '+' },
  ];

  ngOnInit(): void {
    const options = { threshold: 0.5 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animationStarted) {
          this.animationStarted = true;
          this.startCountAnimation();
          this.observer?.unobserve(this.elementRef.nativeElement);
        }
      });
    }, options);
    this.observer.observe(this.elementRef.nativeElement);
  }

  startCountAnimation(): void {
    this.stats.forEach(stat => {
      const duration = 2000;
      const finalValue = stat.value;
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * finalValue);
        stat.displayedValue.set(currentValue);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          stat.displayedValue.set(finalValue);
        }
      };
      window.requestAnimationFrame(step);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
