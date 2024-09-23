import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-sheared',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './sheared.component.html',
  styleUrl: './sheared.component.scss'
})
export class ShearedComponent {

}
