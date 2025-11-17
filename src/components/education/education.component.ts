import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { AdvancedScrollRevealDirective } from '../../directives/advanced-scroll-reveal.directive';
import { TypewriterDirective } from '../../directives/typewriter.directive';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective, AdvancedScrollRevealDirective, TypewriterDirective],
  standalone: true
})
export class EducationComponent {
  education = [
    {
      institution: 'Universidad Autónoma del Estado de México',
      degree: 'Licenciatura en Informática Administrativa',
      period: '2015 - 2019',
      skills: ['Programación', 'Bases de Datos', 'Sistemas', 'Administración']
    },
    {
      institution: 'Platzi',
      degree: 'Desarrollo Front-End con Angular y React',
      period: '2019 - Presente',
      skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'Node.js']
    }
  ];
}
