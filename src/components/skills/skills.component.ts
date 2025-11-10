import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface Skill {
  name: string;
  icon: string;
  link: string;
  isEmoji?: boolean;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FadeInDirective],
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: '🧱 Fundamentos Web',
      skills: [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', link: 'https://developer.mozilla.org/docs/Web/HTML' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', link: 'https://developer.mozilla.org/docs/Web/CSS' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', link: 'https://developer.mozilla.org/docs/Web/JavaScript' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', link: 'https://www.typescriptlang.org/' },
        { name: 'DOM / BOM', icon: '🧱', isEmoji: true, link: '#' },
      ]
    },
    {
      title: '⚙️ Frameworks y Librerías Principales',
      skills: [
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', link: 'https://angular.dev/' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', link: 'https://react.dev/' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', link: 'https://nextjs.org/' },
        { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg', link: 'https://vitejs.dev/' },
      ]
    },
    {
      title: '🅰️ Específicos de Angular',
      skills: [
        { name: 'Angular Material', icon: '🎛️', isEmoji: true, link: '#' },
        { name: 'PrimeNG', icon: '💎', isEmoji: true, link: '#' },
        { name: 'NgRx', icon: 'https://ngrx.io/assets/images/badge.svg', link: 'https://ngrx.io/' },
        { name: 'RxJS', icon: 'https://rxjs.dev/assets/images/logos/RxJS-Logo.png', link: 'https://rxjs.dev/' },
        { name: 'Ionic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg', link: 'https://ionicframework.com/' },
      ]
    },
    {
      title: '⚛️ Específicos de React',
      skills: [
        { name: 'Hooks', icon: '🪝', isEmoji: true, link: '#' },
        { name: 'Redux Toolkit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', link: 'https://redux-toolkit.js.org/' },
        { name: 'React Hook Form', icon: '📋', isEmoji: true, link: '#' },
        { name: 'React Router', icon: '🗺️', isEmoji: true, link: '#' },
        { name: 'PrimeReact', icon: '💎', isEmoji: true, link: '#' },
      ]
    },
    {
      title: '🔄 Estado y Reactividad',
      skills: [
        { name: 'RxJS', icon: 'https://rxjs.dev/assets/images/logos/RxJS-Logo.png', link: 'https://rxjs.dev/' },
        { name: 'Signals', icon: '🔔', isEmoji: true, link: '#' },
        { name: 'Context API', icon: '🌿', isEmoji: true, link: '#' },
        { name: 'Zustand', icon: '🪣', isEmoji: true, link: '#' },
      ]
    },
    {
      title: '🎨 Estilos y UI/UX',
      skills: [
        { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', link: 'https://tailwindcss.com/' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', link: 'https://getbootstrap.com/' },
        { name: 'SCSS / SASS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', link: 'https://sass-lang.com/' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', link: 'https://www.figma.com/' },
      ]
    },
    {
      title: '🔗 APIs y Flujo de Datos',
      skills: [
        { name: 'REST', icon: '🌐', isEmoji: true, link: '#' },
        { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', link: 'https://graphql.org/' },
        { name: 'Apollo Client', icon: '🚀', isEmoji: true, link: '#' },
        { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', link: 'https://www.prisma.io/' },
        { name: 'Axios', icon: '📡', isEmoji: true, link: '#' },
      ]
    },
    {
      title: '🧩 Arquitectura y Móvil',
      skills: [
        { name: 'Microfrontends', icon: '🧱', isEmoji: true, link: '#' },
        { name: 'Module Federation', icon: '🧬', isEmoji: true, link: '#' },
        { name: 'Ionic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg', link: 'https://ionicframework.com/' },
        { name: 'PWA', icon: '⚙️', isEmoji: true, link: '#' },
      ]
    },
    {
      title: '🧰 Herramientas y Ecosistema Dev',
      skills: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', link: 'https://nodejs.org/' },
        { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg', link: 'https://www.npmjs.com/' },
        { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg', link: 'https://webpack.js.org/' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', link: 'https://git-scm.com/' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', link: 'https://github.com/' },
        { name: 'Vite', icon: '⚙️', isEmoji: true, link: '#' },
        { name: 'Prettier', icon: '🧼', isEmoji: true, link: '#' },
        { name: 'ESLint', icon: '🧹', isEmoji: true, link: '#' },
      ]
    },
    {
      title: '📖 Documentación y Testing',
      skills: [
        { name: 'Storybook', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg', link: 'https://storybook.js.org/' },
        { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', link: 'https://jestjs.io/' },
        { name: 'Cypress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg', link: 'https://www.cypress.io/' },
        { name: 'Jasmine', icon: '🧫', isEmoji: true, link: '#' },
        { name: 'Markdown', icon: '📝', isEmoji: true, link: '#' },
      ]
    }
  ];

  openCertificates() {
    // TODO: Implement certificate opening logic
  }
}
