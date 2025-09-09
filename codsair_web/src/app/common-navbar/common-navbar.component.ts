import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-common-navbar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './common-navbar.component.html',
  styleUrl: './common-navbar.component.css'
})
export class CommonNavbarComponent {

  constructor(private router: Router, public languageService: LanguageService) { }

  isMenuOpen = false;
  isScrolled = false;
  currentLanguage = 'en';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigate(path: string) {
    this.router.navigate([path]);
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar') && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  switchLanguage(lang: string) {
    this.languageService.setLanguage(lang);
    this.isMenuOpen = false;
  }
}
