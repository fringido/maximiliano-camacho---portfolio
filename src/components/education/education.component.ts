import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FadeInDirective],
})
export class EducationComponent {
  education = [
    {
      institution: 'Universidad Autónoma del Estado de México',
      degree: 'Licenciatura en Informática Administrativa',
      period: '2015 - 2019'
    },
    {
      institution: 'Platzi',
      degree: 'Desarrollo Front-End con Angular y React',
      period: '2019 - Presente'
    }
  ];
}
