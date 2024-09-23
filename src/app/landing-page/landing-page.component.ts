import { Component } from '@angular/core';
import { HeaderComponent } from '../sheared/header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent,MainPageComponent,ContactPageComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
