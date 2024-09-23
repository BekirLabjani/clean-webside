import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact-page.component.html',
  styleUrls: [
    './contact-responsiv.component.scss',  // Korrekt, wenn im selben Verzeichnis
    './contact-page.component.scss'
  ]
})
export class ContactPageComponent {}