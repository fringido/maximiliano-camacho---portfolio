import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { AdvancedScrollRevealDirective } from '../../directives/advanced-scroll-reveal.directive';
import { TypewriterDirective } from '../../directives/typewriter.directive';
import { CounterAnimationDirective } from '../../directives/counter-animation.directive';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective, AdvancedScrollRevealDirective, TypewriterDirective, CounterAnimationDirective],
  standalone: true
})
export class AboutComponent {}
