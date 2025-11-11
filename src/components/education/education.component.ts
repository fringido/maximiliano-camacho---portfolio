import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
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
