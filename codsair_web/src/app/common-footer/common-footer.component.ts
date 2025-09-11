import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-common-footer',
  standalone: true,
  imports: [],
  templateUrl: './common-footer.component.html',
  styleUrl: './common-footer.component.css'
})
export class CommonFooterComponent {
  constructor(public languageService: LanguageService) {}

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
