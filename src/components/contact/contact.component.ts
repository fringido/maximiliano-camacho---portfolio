import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ContactComponent {
  contactInfo = [
    { type: 'Email', value: 'mmaaxx77@msn.com', link: 'mailto:mmaaxx77@msn.com' },
    { type: 'GitHub', value: 'github.com/fringido', link: 'https://github.com/fringido' },
    { type: 'Behance', value: 'behance.net/mmaaxx77', link: 'https://www.behance.net/gallery/203143285/Portafolio' },
    { type: 'Location', value: 'CDMX, México', link: '#' }
  ];
}
