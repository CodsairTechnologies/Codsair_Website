import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.css'
})
export class FeatureSectionComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, public languageService: LanguageService) { }
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  testimonials = [
    {
      image: 'assets/images/img8.jpg',
      feedbackKey: 'testimonial.neha.feedback',
      nameKey: 'testimonial.neha.name',
      rating: 5
    },
    {
      image: 'assets/images/img3.jpg',
      feedbackKey: 'testimonial.rohit.feedback',
      nameKey: 'testimonial.rohit.name',
      rating: 4
    },
    {
      image: 'assets/images/img4.webp',
      feedbackKey: 'testimonial.kavya.feedback',
      nameKey: 'testimonial.kavya.name',
      rating: 5
    },
    {
      image: 'assets/images/img5.jpg',
      feedbackKey: 'testimonial.aditya.feedback',
      nameKey: 'testimonial.aditya.name',
      rating: 3
    },
    {
      image: 'assets/images/img2.jpg',
      feedbackKey: 'testimonial.divya.feedback',
      nameKey: 'testimonial.divya.name',
      rating: 5
    },
    {
      image: 'assets/images/img1.avif',
      feedbackKey: 'testimonial.amala.feedback',
      nameKey: 'testimonial.amala.name',
      rating: 4
    },
    {
      image: 'assets/images/img7.jpg',
      feedbackKey: 'testimonial.aarav.feedback',
      nameKey: 'testimonial.aarav.name',
      rating: 5
    }
  ];


  cardWidth: number = 0;

  autoSlideInterval: any;
  originalTestimonials = [...this.testimonials];
  isAutoScrolling = false;


  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const card = this.carouselContainer.nativeElement.querySelector('.testimonial-card');
      if (card) {
        this.cardWidth = card.offsetWidth + 20; // width + gap

        const n = 30; // duplicate n times
        this.testimonials = this.duplicateTestimonials(this.originalTestimonials, n);

        const container = this.carouselContainer.nativeElement;
        container.scrollLeft = 0;

        container.addEventListener('scroll', this.onScroll);

        // Auto-slide
        this.autoSlideInterval = setInterval(() => this.scrollNext(), 3000);
      }
    }
  }

  duplicateTestimonials(original: any[], n: number): any[] {
    const result: any[] = [];
    for (let i = 0; i < n; i++) {
      result.push(...original);
    }
    return result;
  }


  // onScroll = () => {
  //   const container = this.carouselContainer.nativeElement;
  //   const n = 30; // same number as duplicates
  //   const originalWidth = container.scrollWidth / n; // width of one original set

  //   if (this.isAutoScrolling) return;

  //   if (container.scrollLeft >= originalWidth * (n - 1)) {
  //     container.scrollLeft -= originalWidth;
  //   } else if (container.scrollLeft < originalWidth) {
  //     container.scrollLeft += originalWidth;
  //   }
  // };

  onScroll = () => {
    const container = this.carouselContainer.nativeElement;
    const n = 30;
    const originalWidth = container.scrollWidth / n;

    if (this.isAutoScrolling) return;

    if (this.isRtl()) {
      // RTL might have negative scrollLeft or inverted logic depending on browser
      if (container.scrollLeft <= 0) {
        container.scrollLeft += originalWidth;
      } else if (container.scrollLeft >= originalWidth * (n - 1)) {
        container.scrollLeft -= originalWidth;
      }
    } else {
      if (container.scrollLeft >= originalWidth * (n - 1)) {
        container.scrollLeft -= originalWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += originalWidth;
      }
    }
  };

  getScrollLeft(container: HTMLElement): number {
    if (this.isRtl()) {
      return container.scrollLeft;
    } else {
      return container.scrollLeft;
    }
  }



  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    if (isPlatformBrowser(this.platformId)) {
      const container = this.carouselContainer.nativeElement;
      container.removeEventListener('scroll', this.onScroll);
    }
  }


  // scrollNext() {
  //   const container = this.carouselContainer.nativeElement;
  //   this.isAutoScrolling = true;
  //   container.scrollBy({ left: this.cardWidth, behavior: 'smooth' });
  //   setTimeout(() => (this.isAutoScrolling = false), 500);
  // }

  // scrollPrev() {
  //   const container = this.carouselContainer.nativeElement;
  //   this.isAutoScrolling = true;
  //   container.scrollBy({ left: -this.cardWidth, behavior: 'smooth' });
  //   setTimeout(() => (this.isAutoScrolling = false), 500);
  // }

  isRtl(): boolean {
    return document.documentElement.getAttribute('dir') === 'rtl';
  }


  scrollNext() {
    const container = this.carouselContainer.nativeElement;
    this.isAutoScrolling = true;
    const direction = this.isRtl() ? -1 : 1;
    container.scrollBy({ left: direction * this.cardWidth, behavior: 'smooth' });
    setTimeout(() => (this.isAutoScrolling = false), 500);
  }

  scrollPrev() {
    const container = this.carouselContainer.nativeElement;
    this.isAutoScrolling = true;
    const direction = this.isRtl() ? 1 : -1;
    container.scrollBy({ left: direction * this.cardWidth, behavior: 'smooth' });
    setTimeout(() => (this.isAutoScrolling = false), 500);
  }



}