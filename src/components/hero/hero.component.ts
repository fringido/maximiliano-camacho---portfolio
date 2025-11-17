import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { AdvancedScrollRevealDirective } from '../../directives/advanced-scroll-reveal.directive';
import { TypewriterDirective } from '../../directives/typewriter.directive';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective, AdvancedScrollRevealDirective, TypewriterDirective],
  standalone: true
})
export class HeroComponent {}
