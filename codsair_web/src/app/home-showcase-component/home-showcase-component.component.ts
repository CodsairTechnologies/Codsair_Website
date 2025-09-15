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
      phone: '+91 9497428487',
      email: 'info@codsairtechnologies.com',
      address:'No 1716, 7th FLOOR, HILITE BUSINESS PARK, Palazhi, Kozhikode, Kerala 673014',
      top: '59%', left: '65%'
    },
    {
      country: 'UAE',
      countryKey: 'showcase.uae',
      flag: 'assets/images/uae.jpg',
      phone: '+971 502419970',
      email: 'info@codsairtechnologies.com',
      address:'Office 540, Al Quoz Industrial Area 2, Dubai, UAE.',
      top: '54%', left: '59%'
    },
    {
      country: 'UK',
      countryKey: 'showcase.canada',
      flag: 'assets/images/ukflag.png',
      phone: '+44 7769632504 ',
      email: 'info@codsairtechnologies.com',
      address : 'Unit 1, 10 stonefield way, Ruislip HA4 0JS',
      top: '37%', left: '46%'
    },
    {
      country: 'KSA',
      countryKey: 'showcase.germany',
      flag: 'assets/images/saudiflag.png',
      phone: '+966 596979106',
      email: 'info@codsairtechnologies.com',
      address :'6228, Salahuddin Al Ayyoubi Street, Al Malaz, Riyadh, Saudi Arabia',
      top: '53%', left: '56%'
    }
  ];

  stats = [
    { value: 120, currentValue: 0, labelKey: 'showcase.projects', suffix: '+' },
    { value: 100, currentValue: 0, labelKey: 'showcase.clients', suffix: '+' },
    { value: 5, currentValue: 0, labelKey: 'showcase.years',suffix: '+'  },
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
