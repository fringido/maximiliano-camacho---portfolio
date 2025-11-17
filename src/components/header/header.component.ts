import { ChangeDetectionStrategy, Component, signal, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedScrollRevealDirective } from '../../directives/advanced-scroll-reveal.directive';
import { TypewriterDirective } from '../../directives/typewriter.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AdvancedScrollRevealDirective, TypewriterDirective],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  menuOpen = signal(false);
  activeSection = signal('home');

  private observer: IntersectionObserver | undefined;
  private sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: "-100px 0px -50% 0px",
      threshold: 0
    };

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);

    this.sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        this.observer?.observe(element);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleMenu(): void {
    this.menuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
  
}