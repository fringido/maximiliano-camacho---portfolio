import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { AdvancedScrollRevealDirective } from '../../directives/advanced-scroll-reveal.directive';
import { TypewriterDirective } from '../../directives/typewriter.directive';
import { CounterAnimationDirective } from '../../directives/counter-animation.directive';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective, AdvancedScrollRevealDirective, TypewriterDirective, CounterAnimationDirective],
  standalone: true
})
export class ExperienceComponent {
  experiences = [
    {
      date: 'FEB 2025 - PRESENTE',
      title: 'Senior Freelance Developer',
      company: 'Freelancer',
      description: 'Desarrollo de aplicaciones móviles y web multiplataforma con enfoque en arquitecturas escalables y experiencias de usuario excepcionales.',
      technologies: ['Angular', 'React', 'Ionic', 'TypeScript', 'Node.js'],
      achievements: [
        'Desarrollo de aplicaciones multiplataforma iOS/Android',
        'Implementación de arquitecturas modulares y escalables',
        'Optimización de rendimiento y experiencia de usuario'
      ]
    },
    {
      date: 'MAY 2022 - ENE 2025',
      title: 'Líder Técnico Front-End',
      company: 'Global Master',
      description: 'Liderazgo técnico en el desarrollo de soluciones front-end empresariales, mentoring de equipos y definición de estándares de desarrollo.',
      technologies: ['Angular', 'NgRx', 'TypeScript', 'Storybook', 'Jest'],
      achievements: [
        'Liderazgo de equipo de 5+ desarrolladores',
        'Implementación de metodologías ágiles',
        'Reducción del 40% en tiempo de desarrollo',
        'Establecimiento de estándares de código'
      ]
    },
    {
      date: 'MAR 2022 - DIC 2023',
      title: 'Desarrollador Angular',
      company: 'e-Bitware',
      description: 'Desarrollo de aplicaciones empresariales con Angular, integración de APIs REST y implementación de interfaces de usuario complejas.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'REST APIs'],
      achievements: [
        'Desarrollo de 3+ aplicaciones empresariales',
        'Integración exitosa con sistemas legacy',
        'Mejora del 30% en rendimiento de aplicaciones'
      ]
    },
    {
      date: 'ENE 2019 - DIC 2022',
      title: 'Desarrollador Web Full-Stack',
      company: 'Gobierno de Tenancingo',
      description: 'Desarrollo y mantenimiento del portal gubernamental, administración de sistemas y implementación de soluciones digitales para servicios públicos.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      achievements: [
        'Desarrollo del portal gubernamental oficial',
        'Implementación de sistemas de gestión interna',
        'Administración de servidores y bases de datos',
        'Digitalización de procesos gubernamentales'
      ]
    }
  ];
}
