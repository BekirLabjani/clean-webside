import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: [
    './contact-form.component.scss',  // Haupt-SCSS-Datei
  
  ]})
export class ContactFormComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
    issue: '',
  };

  constructor(private router: Router) {
  
  }
  isChecked: boolean = false;
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  onSubmit(ngForm: NgForm) {

  }
}
