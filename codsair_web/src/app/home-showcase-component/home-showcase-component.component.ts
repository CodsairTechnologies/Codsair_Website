import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home-showcase-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-showcase-component.component.html',
  styleUrl: './home-showcase-component.component.css'
})
export class HomeShowcaseComponentComponent {
  @ViewChild('experienceSection', { static: true }) experienceSection!: ElementRef;

   constructor(public languageService: LanguageService) {}

  locations = [
    {
      country: 'India',
      countryKey: 'showcase.india',
      flag: 'assets/images/india.jpg',
      phone: '+91 836 013 9952',
      email: 'info@codsair.com',
      top: '59%', left: '65%'
    },
    {
      country: 'UAE',
      countryKey: 'showcase.uae',
      flag: 'assets/images/uae.jpg',
      phone: '+971 50 520 9952',
      email: 'sales@codsair.ae',
      top: '54%', left: '58.5%'
    },
    {
      country: 'Canada',
      countryKey: 'showcase.canada',
      flag: 'assets/images/canada.jpg',
      phone: '+1 647 889-2374',
      email: 'harleen@codsair.com',
      top: '34%', left: '16.5%'
    },
    {
      country: 'Germany',
      countryKey: 'showcase.germany',
      flag: 'assets/images/germany.jpg',
      phone: '+49 173 3039344',
      email: 'jennifer@codsair.com',
      top: '40%', left: '50%'
    }
  ];

  stats = [
    { value: 120, currentValue: 0, labelKey: 'showcase.projects' },
    { value: 75, currentValue: 0, labelKey: 'showcase.clients', suffix: '+' },
    { value: 5, currentValue: 0, labelKey: 'showcase.rating', icon: 'bi bi-star-fill' },
    { value: 5, currentValue: 0, labelKey: 'showcase.clientrating', suffix: '/5' }
  ];

  private observer!: IntersectionObserver;
  private animated = false;

  blogs = [
    {
      image: 'assets/images/blog-1.png',
      titleKey: 'showcase.blog1'
    },
    {
      image: 'assets/images/blog-2.png',
      titleKey: 'showcase.blog2'
    },
    {
      image: 'assets/images/blog-3.png',
      titleKey: 'showcase.blog3'
    }
  ];

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.animated) {
        this.animated = true;
        this.animateStats();
      }
    }, { threshold: 0.3 });

    this.observer.observe(this.experienceSection.nativeElement);
  }

  animateStats() {
    this.stats.forEach(stat => {
      let start = 0;
      const end = stat.value;
      const duration = 1500; // 1.5 seconds
      const stepTime = Math.max(Math.floor(duration / end), 20); // safe interval

      const timer = setInterval(() => {
        start++;
        stat.currentValue = start;
        if (start >= end) {
          clearInterval(timer);
          stat.currentValue = end;
        }
      }, stepTime);
    });
  }

}
