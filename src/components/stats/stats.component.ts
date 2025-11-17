import { ChangeDetectionStrategy, Component, signal, ElementRef, inject, OnInit, OnDestroy } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { AdvancedScrollRevealDirective } from '../../directives/advanced-scroll-reveal.directive';
import { TypewriterDirective } from '../../directives/typewriter.directive';
import { CounterAnimationDirective } from '../../directives/counter-animation.directive';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective, AdvancedScrollRevealDirective, TypewriterDirective, CounterAnimationDirective],
  standalone: true
})
export class StatsComponent implements OnInit, OnDestroy {
  private elementRef = inject(ElementRef);
  private observer: IntersectionObserver | undefined;
  private animationStarted = false;

  stats = [
    { value: 7, text: 'años', subtitle: 'experiencia', displayedValue: signal(0), suffix: '+' },
    { value: 15, text: 'proyectos', subtitle: 'completados', displayedValue: signal(0), suffix: '+' },
    { value: 5, text: 'industrias', subtitle: 'atendidas', displayedValue: signal(0), suffix: '+' },
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
    this.stats.forEach((stat, index) => {
      const duration = 2500;
      const finalValue = stat.value;
      const delay = index * 300; // Stagger animation
      let startTimestamp: number | null = null;

      const easeOutQuart = (t: number): number => {
        return 1 - Math.pow(1 - t, 4);
      };

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp - delay;
        
        if (elapsed < 0) {
          window.requestAnimationFrame(step);
          return;
        }
        
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const currentValue = Math.floor(easedProgress * finalValue);
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
