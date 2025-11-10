import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FadeInDirective],
})
export class ExperienceComponent {
  experiences = [
    {
      date: 'FEB 2025 - PRESENTE',
      title: 'Senior Freelance Developer (Mobile & Web)',
      company: 'Freelancer'
    },
    {
      date: 'MAY 2022 - ENE 2025',
      title: 'Líder Técnico Front-End',
      company: 'Global Master'
    },
    {
      date: 'MAR 2022 - DIC 2023',
      title: 'Desarrollador Angular',
      company: 'e-Bitware'
    },
    {
      date: 'ENE 2019 - DIC 2022',
      title: 'Desarrollador Web y Administrador de Sistemas',
      company: 'Gobierno de Tenancingo'
    }
  ];
}
