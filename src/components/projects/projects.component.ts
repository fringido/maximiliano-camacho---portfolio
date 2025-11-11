import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FadeInDirective],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Aplicación de Delivery Multiplataforma',
      description: 'Arquitectura y desarrollo de una aplicación de delivery multiplataforma (iOS/Android) con librería de componentes reutilizables documentada en Storybook.',
      stack: 'Ionic, React, React Native, Storybook, TypeScript',
      link: '#',
      image: '/src/assets/images/Enfa.png'
    },
    {
      title: 'Dashboard Analítico para Chatbot',
      description: 'Diseño y desarrollo de gráficas y dashboards personalizados para visualización de datos con exploración de tecnologías NLP.',
      stack: 'Angular, TypeScript, Chart.js',
      image: '/src/assets/images/chat.png',
      link: 'https://broadcasterbot.mx/'
    },
    {
      title: 'Hotel Management Dashboard',
      description: 'Una solución integral para la administración hotelera, el estado de habitaciones y la gestión de reservas.',
      stack: 'Angular, NgRx, TypeScript, Storybook',
      link: 'https://easyroom.io/',
      image: '/src/assets/images/easyRomm.png'
    },
    {
      title: 'Sistema de Gestión de Empleados',
      description: 'Sistema web completo para gestión de personal que incluye registro, control de asistencia, nómina y gestión de activos con flujos automatizados.',
      stack: 'Angular, TypeScript, Bootstrap, REST APIs',
      link: '#https://e-bitware.com/fabrica-software/',
      image: '/src/assets/images/jobapp.png'
    },
    {
      title: 'Portal Gubernamental - Tenancingo',
      description: 'Creación, desarrollo y mantenimiento de la página web oficial del gobierno municipal con gestión de contenidos y sistemas internos.',
      stack: 'HTML, CSS, JavaScript, PHP',
      link: 'https://tenancingo.gob.mx/',
      image: '/src/assets/images/tenancingo.jpg'
    },

  ];

}
